#!/usr/bin/env python2.7
# -*- coding: utf-8 -*-
'''
__title__ = ''
__author__ = 'Chen Xin'
__mtime__ = '13/08/15'
'''
import json
from string import split

from flask import abort
from flask.ext.restful import Resource,reqparse
import requests

from app import api, logger, DSOURCES_API
from app.models import Mappings, Receipts
from app.token_verify import authenticate


class ResourceAPI(Resource):
    '''!ResourceAPI for UI parts
    '''
    method_decorators = [authenticate]

    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('Authorization',type=str,location='headers')
        self.args = self.reqparse.parse_args()
        super(ResourceAPI, self).__init__()


    def get(self, id, label):
        '''!
        :param id: data source id
        :param label: should be removed from request
        :return: status code 200 - resource data from DataSource
        '''

        ext_id = self.args['Authorization'].split()
        ext_id = ext_id[1]


        category = split(label, '.');
        label = category[1]
        category = category[0]  # Catogery = Health or Fitness

        # preset url
        # id = 1, datasource 1 ,port 8081
        #id = 2, datasource 2,port 8084

        url = DSOURCES_API[id - 1]

        maps = Mappings.query.filter_by(ext_id=ext_id).all()
        for item in maps:
            logger.debug('item' + item.ext_id + ":" + str(item.receipt_id))
            receipt = Receipts.query.filter_by(consent_receipt_id=item.receipt_id).first()
            logger.debug(receipt.rs_id)
            if (receipt is not None) and (url in receipt.rs_id):
                rs_id = receipt.rs_id
                rpt = receipt.rpt
                logger.debug(rs_id + ":" + rpt + ":" + url)
                break
        if rpt is None:
            logger.debug('RPT not found with ext_id:' + ext_id)
            abort(404, 'RPT not found with ext_id:' + ext_id)



        # rpt = getRPTbyExtid(ext_id)
        # rs_id = getRSIDbyExtid(ext_id)

        payload = {'rs_id': rs_id, 'category': category}
        headers = {'Authorization': 'bearer ' + rpt}

        try:

            json_data = requests.get(url, params=payload, headers=headers)
            json_data = json.loads(json_data.content)


            if (id == 1):
                # Sleeping DataSource
                # Catogery = Health
                # skip label, now is will return all the data under these label
                # ('Minutes-awake','Minutes-light-sleep','Minutes-asleep','Minutes-deep-sleep', 'Minutes-REM-sleep', 'Sleep-efficiency'):

                result_data = {
                    'data': [],
                    'name': 'Health'
                }
                for item in json_data['data']:
                    if item['label'] in (
                            'Minutes-awake',
                            'Minutes-light-sleep',
                            'Minutes-asleep',
                            'Minutes-deep-sleep',
                            'Minutes-REM-sleep',
                            'Sleep-efficiency'):
                        result_data['data'].append(item)


            elif (id == 2):
                # Location DataSource
                # Catogery = Fitness
                # Reformate data for UI

                result_data = {
                    'data': json_data['data'][0]['sample'],
                    'name': json_data['name'],
                    'center': {
                        'lat': json_data['data'][0]['sample'][0]['lat'],
                        'lng': json_data['data'][0]['sample'][0]['lng']
                    }
                }



                logger.info(result_data)

            elif (id == 3):
                pass
        except Exception as e:
            logger.debug('can not be reached!')
            logger.debug(e)
            abort(500, 'can not be reached!')

        logger.debug('RPT:' + rpt)
        logger.debug('RSID:' + rs_id)
        logger.debug('URI:' + url)
        logger.debug(result_data)
        return result_data, 200


api.add_resource(ResourceAPI, '/resource/<int:id>/<label>', endpoint='resource')
