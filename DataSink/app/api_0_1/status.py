#!/usr/bin/env python2.7
# -*- coding: utf-8 -*-
'''
__title__ = ''
__mtime__ = '22/09/15'
'''
from flask.ext.restful import Resource

from app import api


class StatusAPI(Resource):
    '''!Just to show the datasink is running
    '''

    def get(self):
        # try:
        # dosomething()
        # except Exception as e:
        #     # abort(400, {'status_code': '400', 'msg': 'Query resulted 0 fffdfdresults'})
        #     #{'requestStatusCode': '400', 'requestStatus': 'Bad Request', 'content': Query resulted 0 results}
        #     #abort(400, {'content': '' + repr(e) + ''})
        return {'message': 'ok'}, 200


api.add_resource(StatusAPI, '/status', endpoint='status')
