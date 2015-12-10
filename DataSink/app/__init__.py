#!/usr/bin/env python2.7
# -*- coding: utf-8 -*-
'''
__author__ = 'Chen Xin'
__email__ = 'dbchenxin@gmail.com'
__mtime__ = '02/06/15'
'''
import json

from flask import Flask
from flask.ext.sqlalchemy import SQLAlchemy
from flask.ext.cors import CORS
from flask.ext.restful import Api
import requests

app = Flask(__name__)



# Read Config
app.config.from_object('config')

# =========================================
# Custom logging server
# http://log.dhrproject.ml
# logger = DHRLogger.getLogger('sink')
# Now, it is using the default python log lib
# =========================================
import log
logger = log.logger

import error


# =========================================
# get config file
# =========================================


try:
    r = requests.get(app.config['CONFIG_URI'], auth=(app.config['CONFIG_USER'], app.config['CONFIG_PASS']))
    GLOABL_CONFIG = json.loads(r.content)

    DOPERATOR_API = 'http://' + GLOABL_CONFIG['operators']['1']['network']['ip_public'] + ':' + \
                    GLOABL_CONFIG['operators']['1']['network']['port_api'] + '/'

    DSOURCES_API = []
    for item in GLOABL_CONFIG['sources']:
        source = GLOABL_CONFIG['sources'][item]['network']
        DSOURCES_API.append('http://' + source['ip_public'] + ':' + source['port_api'] + source['data_api'])


    logger.info('get config file from:' + app.config['CONFIG_URI'])
    logger.info(DSOURCES_API)
except Exception as e:
    logger.info('failed to get config file from:' + app.config['CONFIG_URI'])
    logger.info('init failed')
    logger.info(e)
    exit()



# =========================================
# Init DataBase
# =========================================
db = SQLAlchemy(app)



# =========================================
# Flask-restful
# add prefix here or it won't work when you register blueprint
# =========================================
api = Api(app, prefix='/api/v0.1')


# =========================================
# only if you import abort from flask.ext.restful
# =========================================
# api = Api(app,prefix='/api/v0.1',errors=error.errorMessages)


# =========================================
# Register blueprint for /api/v0.1
# =========================================
from .api_0_1 import api_0_1 as api_0_1_blueprint
app.register_blueprint(api_0_1_blueprint)



# =========================================
# Allow cross domain request
# =========================================
cors = CORS(app, resources={r"/*": {"origins": "*"}}, allow_headers='*')

import models,token_verify,utils,db_handler





# =========================================
# Init database
# =========================================
# db.drop_all()
db.create_all()


# =========================================
# add test users
# TODO: read test user from config file and create it
# =========================================
testuser = models.Users(app.config['CONFIG_USER'], app.config['CONFIG_PASS'])
db.session.add(testuser)





