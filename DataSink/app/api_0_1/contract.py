#!/usr/bin/env python2.7
# -*- coding: utf-8 -*-
'''
__title__ = ''
__author__ = 'Chen Xin'
__email__ = 'dbchenxin@gmail.com'
__mtime__ = '13/08/15'
'''
import datetime

from flask import request
from flask.ext.restful import Resource
from flask import abort

from app import api, logger, GLOABL_CONFIG
from app.models import Users
from app.token_verify import authenticate
from config import APP_GLOBAL_ID


CONTRACT_TEMPLATE_DATASINK = {
    "actor_id": "4",
    "endpoint_uri": "http://172.0.0.1/",
    "user_id": "Local identifier of the Account Owner at the sink or source service.",
    "status": "active",
    "created_at": "",
    "role": "Sink",
    "legal_role": "processor",
    "contract_terms": "",
    "data_type": [
        "Food",
        "Pharmacy",
        "Fitness",
        "Health",
        "Finance",
        "Insurance"
    ],
    "intendet_use": "free",
    "validity_period": "auto_renew"
}

class ContractAPI(Resource):
    '''!Send contract template to DataOperator
    '''
    method_decorators = [authenticate]

    def get(self):
        '''!DataSource get contract by external user id.
        :param      id: ext_id for current user
        :return: status code 200 - Contract in JSON format
        :return: status code 404 - User doesn't exist
        '''
        id = request.headers.get('Authorization', None)
        id = id.split()[1]
        user = Users.query.filter_by(ext_id = id).first()

        if user is None or not user:
            logger.info('User not exist!')
            abort(404, 'User not exist!')

        logger.info('Sending contract template to DataOperator for user:'+id)

        CONTRACT_TEMPLATE_DATASINK['actor_id'] = APP_GLOBAL_ID
        CONTRACT_TEMPLATE_DATASINK['endpoint_uri'] = 'http://' + GLOABL_CONFIG['sinks'][APP_GLOBAL_ID]['network'][
            'ip_public'] + ':' + \
                                                     GLOABL_CONFIG['sinks'][APP_GLOBAL_ID]['network']['port_api'] + '/'
        CONTRACT_TEMPLATE_DATASINK['data_type'] = GLOABL_CONFIG['sinks'][APP_GLOBAL_ID]['categories']

        CONTRACT_TEMPLATE_DATASINK['user_id'] = id
        CONTRACT_TEMPLATE_DATASINK['created_at'] = str(datetime.datetime.now())

        logger.info(CONTRACT_TEMPLATE_DATASINK)
        return CONTRACT_TEMPLATE_DATASINK, 200


api.add_resource(ContractAPI, '/contract', endpoint='contract')
