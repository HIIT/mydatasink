#!/usr/bin/env python2.7
# -*- coding: utf-8 -*-
'''
__title__ = ''
__author__ = 'Chen Xin'
__email__ = 'dbchenxin@gmail.com'
__mtime__ = '13/08/15'
'''
import hashlib

from app.models import Users
from app import api
from flask import abort
from flask.ext.restful import Resource, reqparse


class AuthAPI(Resource):
    '''!Using username and password to exchange a token for DataSink,
    almost operating need this token
    '''

    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('username', type=str, required=True, help='No username provide', location='json')
        self.reqparse.add_argument('password', type=str, required=True, help='No password provide', location='json')
        self.args = self.reqparse.parse_args()
        super(AuthAPI, self).__init__()

    def post(self):
        '''!Post a json object which includes username and password to exchange a token
        {
            "username":"testuser",
            "password":"123456"
        }
        :return: status code 200 - {"token":"ff9a7c60bd0a4d71df0d0755cdb33b84"}
        :return: status code 200 - username or password missing
        :return: status code 200 - username and password can't be empty
        :return: status code 404 - User doesn't exist
        '''

        username = self.args['username']
        password = self.args['password']

        if username is None or password is None:
            return {"message": "username or password missing"}, 200
        if username == '' or password == '':
            return {"message": "username and password can not be empty"}, 200

        user = Users.query.filter_by(username = username,password=hashlib.md5(password).hexdigest()).first()

        if user is not None:
            return {"ext_id":user.ext_id},200
        else:
            abort(404, 'user does not exist')


api.add_resource(AuthAPI, '/auth', endpoint='auth')
