#!/usr/bin/env python2.7
# -*- coding: utf-8 -*-
'''! Errors Dictionary:
__title__ = 'errors.py'
__author__ = 'Chen Xin'
__email__ = 'dbchenxin@gmail.com'
__mtime__ = '13/08/15'
@description specific message and status code, when certain errors are encountered during a request.
'''

errorMessages = {
    'OK': {
        'message': "The request is OK. ",
        'status': 200,
    },
    'Created': {
        'message': "The request has been fulfilled, and a new resource is created. ",
        'status': 201,
    },
    'Accepted': {
        'message': "The request has been accepted for processing, but the processing has not been completed. ",
        'status': 202,
    },
    'BadRequest': {
        'message': "Parameter Missed. ",
        'status': 400,
    },
    'Unauthorized': {
        'message': "The request was a legal request, but the server is refusing to respond to it. For use when authentication is possible but has failed or not yet been provided. ",
        'status': 401,
    },
    'Forbidden': {
        'message': "The request was a legal request, but the server is refusing to respond to it. ",
        'status': 403,
    },
    'Not Found': {
        'message': "The requested page could not be found or user doesn't exist. ",
        'status': 404,
    },
    'Method Not Allowed': {
        'message': "A request was made of a page using a request method not supported by that page. ",
        'status': 405,
    },
    'UserAlreadyExistsError': {
        'message': "A user with that username already exists.",
        'status': 409,
    },
    'ResourceDoesNotExist': {
        'message': "A resource with that ID no longer exists.",
        'status': 410,
    },
    'Unsupported Media Type': {
        'message': "The server will not accept the request, because the media type is not supported ",
        'status': 415,
    },
}

