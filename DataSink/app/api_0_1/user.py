#!/usr/bin/env python2.7
# -*- coding: utf-8 -*-
'''
__title__ = ''
__author__ = 'Chen Xin'
__email__ = 'dbchenxin@gmail.com'
__mtime__ = '11/08/15'
'''
from flask import abort
from flask import request
from flask.ext.restful import Resource, marshal_with, fields, reqparse

from app import api, db, logger
from app.models import Users
from app.token_verify import authenticate


class UserAPI(Resource):
    '''!
    Update/Get User info
    '''
    method_decorators = [authenticate]

    userinfo = {
        "status": "",
        "email": "",
        "gender": "",
        "address": ""
    }

    userinfo_fields = {
        'username': fields.String,
        'ext_id': fields.String,
        'gender': fields.String,
        'email': fields.String,
        'address': fields.String,
        'createtime': fields.DateTime,
    }

    def __init__(self):
        self.reqparse = reqparse.RequestParser()

        self.reqparse.add_argument('Authorization',type=str,location='headers')
        self.args = self.reqparse.parse_args()
        super(UserAPI, self).__init__()

    @marshal_with(userinfo_fields, envelope='user')
    def get(self,ext_id):
        if ext_id == 'me':
            id = self.args['Authorization'].split()[1]
        else:
            id = ext_id
        return Users.query.filter_by(ext_id=id).first()

    def put(self,ext_id):
        if ext_id == 'me':
            id = self.args['Authorization'].split()[1]
        else:
            id = ext_id

        for item in self.userinfo:
            self.userinfo[item] = request.json.get(item)

        user = Users.query.filter_by(ext_id=id).first()

        user.status = self.userinfo['status']
        user.email = self.userinfo['email']
        user.gender = self.userinfo['gender']
        user.address = self.userinfo['address']

        db.session.add(user)
        db.session.commit()
        return {'message': 'updated'}, 200


class UsersAPI(Resource):
    '''!
    List all users in database
    '''
    method_decorators = [authenticate]

    resource_fields = {
        'username': fields.String,
        'ext_id': fields.String,
        'gender': fields.String,
        'email': fields.String,
        'address': fields.String,
        'createtime': fields.String,
    }

    #TODO For Administrator only
    @marshal_with(resource_fields, envelope='users')
    def get(self):
        return Users.query.all()


class registerAPI(Resource):
    '''!Register
    '''

    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('username', type=str, required=True, help='No username provide', location='json')
        self.reqparse.add_argument('password', type=str, required=True, help='No password provide', location='json')
        self.args = self.reqparse.parse_args()
        super(registerAPI, self).__init__()


    def post(self):
        '''!Post a json object which includes username and password to create a new user
        {
            "username":"testuser",
            "password":"123456"
        }
        :return: status code 201 - create success
        :return: status code 200 - username and password can't be empty
        :return: status code 409 - user already exists

        '''

        username = self.args['username']
        password = self.args['password']


        if username == '' or password == '':
            return {"message": "username and password can't be empty"}, 400

        if Users.query.filter_by(username=username).first() is not None:
            logger.info('user already exist!')
            abort(409, 'user already exist!')

        newuser = Users(username, password)
        db.session.add(newuser)
        db.session.commit()
        logger.info('create user : ' + username)
        return {"message": "created"}, 201


api.add_resource(registerAPI, '/user', endpoint='register')
api.add_resource(UsersAPI, '/users', endpoint='users')
api.add_resource(UserAPI, '/user/<ext_id>', endpoint='user')