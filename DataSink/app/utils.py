#!/usr/bin/env python2.7
# -*- coding: utf-8 -*-
'''
__title__ = ''
__mtime__ = '13/08/15'
'''
import urllib2

from flask import abort

from app import logger
from app.models import Receipts, Mappings


def getData(url,token):
    '''!Fetch data from data source
    :param url:
    :return data:
    '''
    try:
        request = urllib2.Request(url)
        request.add_header('Authorization', 'bearer '+token)
        logger.info('Fetching data from:'+url)
        data = urllib2.urlopen(request,timeout=20).read()
    except:
        logger.error('Failed fetch data from :' + url)

    return data

def getRPTbyExtid(ext_id):
    '''!Get RPT by ext_id
    :param ext_id:
    :return: status code 200 - RPT
    :return: status code 404 - RPT not found
    '''
    map =  Mappings.query.filter_by(ext_id=ext_id).first()
    if map is not None:
        receipt = Receipts.query.filter_by(consent_receipt_id=map.receipt_id).first()
        if receipt is not None:
            return receipt.rpt

    logger.debug('RPT not found with ext_id:'+ext_id)
    abort(404, 'RPT not found with ext_id:' + ext_id)

def getRSIDbyExtid(ext_id):
    '''!Get rs_id by ext_id
    :param ext_id:
    :return: status code 200 - rs_id
    :return: status code 404 - rs_id not found
    '''
    map =  Mappings.query.filter_by(ext_id=ext_id).first()
    if map is not None:
        receipt = Receipts.query.filter_by(consent_receipt_id=map.receipt_id).first()
        if receipt is not None:
            return receipt.rs_id

    logger.debug('rs_id not found with ext_id:'+ext_id)
    abort(404, 'rs_id not found with ext_id:' + ext_id)




    # def getReceiptbyID(ext_id, service_id):
    # '''!Get all receipts by ext_id and service_id
    #     :param ext_id:
    #     :return: status code 200 - rs_id
    #     :return: status code 404 - rs_id not found
    #     '''
    #     map = Mappings.query.filter_by(ext_id=ext_id).all()
    #
    #     if map is not None:
    #         for item in map:
    #             receipt = Receipts.query.filter_by(consent_receipt_id=item.receipt_id,
    #                                                service_contract_id=service_id).first()
    #             if receipt is not None:
    #                 return receipt
    #
    #     logger.debug('rs_id not found with ext_id:' + ext_id + 'and service_id' + service_id)
    #     abort(404, 'rs_id not found with ext_id:' + ext_id + 'and service_id' + service_id)
