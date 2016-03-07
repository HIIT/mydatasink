#!/usr/bin/env python2.7
# -*- coding: utf-8 -*-
'''! DB models
__title__ = ''
__mtime__ = '02/06/15'
'''
import hashlib
import datetime

from app import db, app, logger


class Users(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(64), index=True, unique=True)
    password = db.Column(db.String(64),index=True)
    createtime = db.Column(db.TIMESTAMP)
    ext_id = db.Column(db.String(32))  # TODO ext_id should be different for different dataoperator()
    status = db.Column(db.String(16))
    email = db.Column(db.String(64))
    gender = db.Column(db.String(16))
    address = db.Column(db.String(512))

    def __init__(self, username, password):
        self.username = username
        self.password = hashlib.md5(password).hexdigest()
        self.createtime = datetime.datetime.now()
        logger.debug("Create a user at:" + str(self.createtime))
        self.ext_id = hashlib.md5(username+'@'+app.config['APP_NAME']).hexdigest()

    def __repr__(self):
        return '<User %r>' % (self.username)


class Receipts(db.Model):
    __tablename_ = 'receipts'
    id = db.Column(db.Integer,primary_key=True, autoincrement=True)
    rpt = db.Column(db.Text)
    rs_id = db.Column(db.String(128),unique=True)
    consent_receipt_id = db.Column(db.String(128),unique=True)
    service_contract_id = db.Column(db.String(128))
    authorization_status = db.Column(db.String(64))
    data_usage_license = db.Column(db.TEXT)
    consent_summary = db.Column(db.TEXT)
    update_time = db.Column(db.TIMESTAMP)  # TODO change it real timestamp, use int to store unix timestamp in mysql

    def __init__(self,rpt,rs_id,consent_receipt_id,service_contract_id,authorization_status,data_usage_license,consent_summary):
        self.rpt                    =   rpt
        self.rs_id                  =   rs_id
        self.consent_receipt_id     =   consent_receipt_id
        self.service_contract_id    =   service_contract_id
        self.authorization_status   =   authorization_status
        self.data_usage_license     =   data_usage_license
        self.consent_summary        =   consent_summary
        self.update_time = datetime.datetime.now()



class Mappings(db.Model):
    __tablename_ = 'mappings'
    id = db.Column(db.Integer,primary_key=True, autoincrement=True)
    ext_id = db.Column(db.String(32))
    receipt_id = db.Column(db.Integer)

    # mysql doesn't support foreignkey???
    # ext_id = db.Column(db.String(32),db.ForeignKey('users.ext_id'))
    # receipt_id = db.Column(db.Integer,db.ForeignKey('receipts.id'),unique=True)

    expired = db.Column(db.TIMESTAMP)

    def __init__(self,ext_id,receipt_id,expired):
        self.ext_id      =   ext_id
        self.receipt_id  =   receipt_id
        self.expired     =   expired







