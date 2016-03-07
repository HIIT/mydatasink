#!/usr/bin/env python2.7
# -*- coding: utf-8 -*-
'''
__title__ = ''
__mtime__ = '05/10/15'
'''

import json
import logging

import requests


logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("TestAPP")


# cotegory ["Health", "Fitness"]
# source =1 sink =2

service_id = '2'

category = 'Fitness.Diastolic-blood-pressure'

testuser = json.dumps({
    "username": "test",
    "password": "123456"
})

DSINK_API_BASE = 'http://127.0.0.1:8082/api/v0.1/'

DSINK_API_REGISTER = DSINK_API_BASE + 'user'

DSINK_API_AUTH = DSINK_API_BASE + 'auth'

DSINK_API_USERS = DSINK_API_BASE + 'users'

DSINK_API_CONTRACT = DSINK_API_BASE + 'contract'

DSINK_API_RECEIPT = DSINK_API_BASE + 'receipt'

DSINK_API_RESOURCE = DSINK_API_BASE + 'resource'

ext_id = ''
rpt = ''
headers = {'content-type': 'application/json'}
headers2 = {}

response = requests.post(
    DSINK_API_AUTH,
    data=testuser,
    headers=headers)
ext_id = json.loads(response.content)['ext_id']
headers2 = {'content-type': 'application/json', 'Authorization': 'bearer ' + ext_id}

logger.info('Start testing get resrouce for test from datasource')
logger.info("***Request***")
logger.info("url:" + response.url)
logger.info("header:" + str(response.headers))
logger.info("body:" + testuser)
logger.info("***Response***")
logger.info("status:" + str(response.status_code))
logger.info("content:" + response.content)
logger.info("=========================================")

response = requests.get(
    DSINK_API_RESOURCE + "/" + service_id + "/" + category,
    headers=headers2)

logger.info('Start testing get data ---- /api/v0.1/resource')
logger.info("***Request***")
logger.info("url:" + response.url)
logger.info("header:" + str(response.headers))
logger.info("***Response***")
logger.info("status:" + str(response.status_code))
logger.info("content:" + response.content)
logger.info("=========================================")
