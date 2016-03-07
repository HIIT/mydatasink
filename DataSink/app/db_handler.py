#!/usr/bin/env python2.7
# -*- coding: utf-8 -*-
'''
__title__ = ''
__mtime__ = '20/08/15'
'''
import hashlib

from app import db
from models import Users, Receipts


class DBHandler:
    '''!
    DataBase Handle, but this class haven't been used.
    '''
    def __init__(self):
        pass

    def get_user(self,ext_id):
        return   Users.query.filter_by(ext_id = ext_id).first()

    def search_users(self,username):
        return   Users.query.filter_by(username.like(username)).all()

    def create_user(self,username,password):
        newuser = Users(username, password)
        db.session.add(newuser)
        db.session.commit()

    def update_user(self,userinfo):

        user = Users.query.filter_by(ext_id=userinfo['id']).first()
        for item in userinfo:
            if item is not None:
                user[item] = userinfo[item]
        db.session.add(user)
        db.session.commit()

    def list_users(self):
        return Users.query.all()


    def get_token(self,username,password):
        return Users.query.filter_by(username = username,password=hashlib.md5(password).hexdigest()).first()

    def create_receipt(self,obj):
        '''

        :param obj:an object which includes everything for a consent
        :return:
        '''
        receipt = Receipts.query.filter_by(consent_receipt_id=obj['consent_receipt_id']).first()
        db.session.add(receipt)
        db.session.commit()

    def update_receipt(self):
        pass


    def get_contract(self):
        pass
