#!/usr/bin/env python2.7
# -*- coding: utf-8 -*-
'''
__title__ = ''
__author__ = 'Chen Xin'
__email__ = 'dbchenxin@gmail.com'
__mtime__ = '28/09/15'
'''
import logging


logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("TestAPP")

import json
import logging
import requests


logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("TestAPP")

service_id = '1'

category = 'Health.Diastolic-blood-pressure'  # category ["Health", "Fitness"]

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
    DSINK_API_REGISTER,
    data=testuser,
    headers=headers)

logger.info('Start testing register new user ---- /api/v0.1/user')
logger.info("***Request***")
logger.info("url:" + response.url)
logger.info("header:" + str(response.headers))
logger.info("body:" + response.text)
logger.info("***Response***")
logger.info("status:" + str(response.status_code))
logger.info("content:" + response.content)
logger.info("=========================================")

response = requests.post(
    DSINK_API_REGISTER,
    data=testuser,
    headers=headers)

logger.info('Start testing register conflic new user ---- /api/v0.1/user')
logger.info("***Request***")
logger.info("url:" + response.url)
logger.info("header:" + str(response.headers))
logger.info("body:" + testuser)
logger.info("***Response***")
logger.info("status:" + str(response.status_code))
logger.info("content:" + response.content)
logger.info("=========================================")

response = requests.post(
    DSINK_API_AUTH,
    data=testuser,
    headers=headers)

logger.info('Start testing login ---- /api/v0.1/auth')
logger.info("***Request***")
logger.info("url:" + response.url)
logger.info("header:" + str(response.headers))
logger.info("body:" + testuser)
logger.info("***Response***")
logger.info("status:" + str(response.status_code))
logger.info("content:" + response.content)
logger.info("=========================================")

# =================================================
# Got ext_id now
#================================================
ext_id = json.loads(response.content)['ext_id']
headers2 = {'content-type': 'application/json', 'Authorization': 'bearer ' + ext_id}

response = requests.put(
    DSINK_API_REGISTER + '/me',
    data=json.dumps({
        "status": "active",
        "email": "Alex.John@gmail.com",
        "gender": "male",
        "address": "oulu,finland"
    }),
    headers=headers2)

logger.info('Start testing update user information ---- /api/v0.1/user/me')
logger.info("***Request***")
logger.info("url:" + response.url)
logger.info("header:" + str(response.headers))
logger.info("body:" + json.dumps({
    "status": "active",
    "email": "Alex.John@gmail.com",
    "gender": "male",
    "address": "oulu,finland"
}))
logger.info("***Response***")
logger.info("status:" + str(response.status_code))
logger.info("content:" + response.content)
logger.info("=========================================")

response = requests.get(
    DSINK_API_REGISTER + '/me',
    headers=headers2)

logger.info('Start testing get user information ---- /api/v0.1/user/me')
logger.info("***Request***")
logger.info("url:" + response.url)
logger.info("header:" + str(response.headers))
logger.info("body:" + response.text)
logger.info("***Response***")
logger.info("status:" + str(response.status_code))
logger.info("content:" + response.content)
logger.info("=========================================")

response = requests.get(
    DSINK_API_USERS,
    headers=headers2)

logger.info('Start testing get user list ---- /api/v0.1/users')
logger.info("***Request***")
logger.info("url:" + response.url)
logger.info("header:" + str(response.headers))
logger.info("***Response***")
logger.info("status:" + str(response.status_code))
logger.info("content:" + response.content)
logger.info("=========================================")

response = requests.get(
    DSINK_API_CONTRACT,
    headers=headers2)

logger.info('Start testing get contract ---- /api/v0.1/contract')
logger.info("***Request***")
logger.info("url:" + response.url)
logger.info("header:" + str(response.headers))
logger.info("***Response***")
logger.info("status:" + str(response.status_code))
logger.info("content:" + response.content)
logger.info("=========================================")

NEW_CONSENT = {
    "consentReceipt": {
        "account_id": "762a47e8028a66bf02003d1f7111c933",
        "rs_id": "http://178.62.229.148:8081/api/v0.1/resource/d242a33f-2435-43f5-92b4-e69f330daa57",
        "consent_summary": {
            "data_source": {
                "name": "DataSource-HealthAndFit",
                "description": "DataSource based on Health and Fitness Data"
            },
            "data": [
                "Health",
                "Fitness"
            ],
            "data_sink": {
                "name": "DataSink-OneAndOnly",
                "description": "Computer or any other medium capable of receiving data"
            }
        },
        "data_usage_license": 1,
        "consent_receipt_id": 1,
        "authorization_status": "active",
        "service_contract_id": 2
    },
    "rpt": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJEYXRhT3BlcmF0b3IiLCJpYXQiOiIxNDQzNjIyMjg2IiwicnNfaWQiOiJhSFIwY0Rvdkx6RTNPQzQyTWk0eU1qa3VNVFE0T2pnd09ERXZZWEJwTDNZd0xqRXZjbVZ6YjNWeVkyVXZaREkwTW1Fek0yWXRNalF6TlMwME0yWTFMVGt5WWpRdFpUWTVaak16TUdSaFlUVTMiLCJleHAiOiIxMDAxNDQzNjIyMjg1In0.MR1GSlzsiEofFAqrKq8Z15CtULZfKvkI20xZQGpv7AOfjMP2o5C9qN_KMzkvQe9R80Ux3-9jxBGkLKhl1GaW7A"

}
response = requests.post(
    DSINK_API_RECEIPT,
    data=json.dumps(NEW_CONSENT),
    headers=headers2)

logger.info('Start testing get consent receipt ---- /api/v0.1/receipt')
logger.info("***Request***")
logger.info("url:" + response.url)
logger.info("header:" + str(response.headers))
logger.info("body:" + str(NEW_CONSENT))
logger.info("***Response***")
logger.info("status:" + str(response.status_code))
logger.info("content:" + response.content)
logger.info("=========================================")

CONSENT_RECEIPT_TEST = {
    "consent_receipt_id": "1",
    "authorization_status": "active"
}

response = requests.put(
    DSINK_API_RECEIPT,
    data=json.dumps(CONSENT_RECEIPT_TEST),
    headers=headers2)

logger.info('Start testing update consent receipt ---- /api/v0.1/receipt')
logger.info("***Request***")
logger.info("url:" + response.url)
logger.info("header:" + str(response.headers))
logger.info("body:" + str(CONSENT_RECEIPT_TEST))
logger.info("***Response***")
logger.info("status:" + str(response.status_code))
logger.info("content:" + response.content)
logger.info("=========================================")








# ====================================
# Test for two datasource
#====================================
response = requests.get(
    DSINK_API_RESOURCE + '/1/Health.Heart-Rate',
    headers=headers2)

logger.info('Start testing get data ---- /api/v0.1/resource')
logger.info("***Request***")
logger.info("url:" + response.url)
logger.info("header:" + str(response.headers))
logger.info("***Response***")
logger.info("status:" + str(response.status_code))
logger.info("content:" + response.content)
logger.info("=========================================")





response = requests.get(
    DSINK_API_RESOURCE + "/2/Health.Diastolic-blood-pressure",
    headers=headers2)
logger.info("content:" + response.content)
logger.info('Start testing get data ---- /api/v0.1/resource')
logger.info("***Request***")
logger.info("url:" + response.url)
logger.info("header:" + str(response.headers))
logger.info("***Response***")
logger.info("status:" + str(response.status_code))
logger.info("content:" + response.content)
logger.info("=========================================")