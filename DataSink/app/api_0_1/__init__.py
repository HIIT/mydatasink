#!/usr/bin/env python2.7
# -*- coding: utf-8 -*-
'''
__title__ = ''
__author__ = 'Chen Xin'
__email__ = 'dbchenxin@gmail.com'
__mtime__ = '13/08/15'
'''

from flask import Blueprint

api_0_1 = Blueprint('api', __name__)

from . import user, contract, receipt, auth, resource, status


