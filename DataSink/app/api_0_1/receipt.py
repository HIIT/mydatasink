#!/usr/bin/env python2.7
# -*- coding: utf-8 -*-
'''
__title__ = ''
__mtime__ = '13/08/15'
'''
import json
import datetime

from flask import request
from flask import abort
from flask.ext.restful import Resource

from app.token_verify import authenticate
from app import api, db, logger
from app.models import Receipts, Mappings


class ReceiptAPI(Resource):
    # TODO implement receipt modify history chain
    method_decorators = [authenticate]

    # data_usage_license, consent_receipt_id,service_contract_id should be an uuid, but now it is int
    receipt = {
        "consentReceipt": {
            "consent_receipt_id": 0,
            "account_id": "",
            "service_contract_id": 0,
            "rs_id": "",
            "data_usage_license": 0,
            "authorization_status": "",
            "consent_summary": {}
        },
        "rpt": "",
    }


    def put(self):
        '''!Update consent receipt
        # TODO check status while pause, shouldn't get any resource
        :return: status code 409 - already exists
        :return: status code 404 - consent receipt not found
        :return: status code 202 - Updated
        '''
        consent_receipt_id = request.json.get('consent_receipt_id')
        authorization_status = request.json.get('authorization_status')

        if consent_receipt_id is None or consent_receipt_id == '':
            logger.debug(consent_receipt_id + 'can not be none!')
            abort(409, consent_receipt_id + 'can not be none!')

        if authorization_status is None or authorization_status == '':
            logger.debug(authorization_status + 'can not be none!')
            abort(409, authorization_status + 'can not be none!')

        receipt = Receipts.query.filter_by(consent_receipt_id=consent_receipt_id).first()
        if receipt is None:
            logger.debug('not found:' + consent_receipt_id)
            abort(404, 'not found:' + consent_receipt_id)

        receipt.consent_receipt_id = consent_receipt_id
        receipt.authorization_status = authorization_status

        db.session.add(receipt)
        db.session.commit()
        return {'message': 'updated'}, 202


    def post(self):
        '''!Receive consent receipt
        :return: status code 409 - already exists
        :return: status code 201 - created
        '''
        logger.info(json.loads(request.get_data()))

        for item in self.receipt:
            self.receipt[item] = request.json.get(item)

        receipt = Receipts.query.filter_by(
            consent_receipt_id=self.receipt['consentReceipt']['consent_receipt_id']).first()

        # if receipt exist updated it
        if receipt is not None:
            logger.debug('Receipt already exist!')

            # TODO still return 409 after demo
            # abort(409, 'Receipt already exist!')

            #=====start=====
            receipt.rpt = self.receipt['rpt']
            receipt.rs_id = self.receipt['consentReceipt']['rs_id'],
            receipt.consent_receipt_id = self.receipt['consentReceipt']['consent_receipt_id']
            receipt.service_contract_id = self.receipt['consentReceipt']['service_contract_id']
            receipt.authorization_status = self.receipt['consentReceipt']['authorization_status']
            receipt.data_usage_license = self.receipt['consentReceipt']['data_usage_license']
            receipt.consent_summary = json.dumps(self.receipt['consentReceipt']['consent_summary'])
            receipt.update_time = datetime.datetime.now()
            db.session.add(receipt)
            db.session.commit()
            return {'message': 'updated'}, 201
            #======end=====

        for item in self.receipt['consentReceipt']:
            if item is None:
                logger.debug(item + 'can not be none!')
                abort(409, item + 'can not be none!')
                # receipt[item] = self.receipt[item]

        receipt = Receipts(
            self.receipt['rpt'],
            self.receipt['consentReceipt']['rs_id'],
            str(self.receipt['consentReceipt']['consent_receipt_id']),
            str(self.receipt['consentReceipt']['service_contract_id']),
            self.receipt['consentReceipt']['authorization_status'],
            str(self.receipt['consentReceipt']['data_usage_license']),
            json.dumps(self.receipt['consentReceipt']['consent_summary']))

        mapping = Mappings(
            self.receipt['consentReceipt']['account_id'],
            str(self.receipt['consentReceipt']['consent_receipt_id']),
            datetime.datetime.now()
        )

        db.session.add(mapping)
        db.session.add(receipt)
        db.session.commit()
        return {'message': 'created'}, 201


api.add_resource(ReceiptAPI, '/receipt', endpoint='receipt')
