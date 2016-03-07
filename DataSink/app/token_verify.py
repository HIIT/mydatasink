#!/usr/bin/env python2.7
# -*- coding: utf-8 -*-
'''! Verify authorazation header which now is a external_user_id
__title__ = 'token_verify'
__mtime__ = '15/07/15'
'''
from functools import wraps

from app import logger
from flask import request, g
from models import Users
from flask import abort


class TOKENError(Exception):
    def __init__(self, error, description, status_code=400, headers=None):
        self.error = error
        self.description = description
        self.status_code = status_code
        self.headers = headers


def verify_token(realm=None):
    """
    :param realm: an optional realm
    """
    realm = 'Login Required'
    auth = request.headers.get('Authorization', None)

    if auth is None:
        logger.debug('Authorization header was missing')
        abort(500, 'Authorization header was missing')
        # raise TOKENError('Authorization Required', 'Authorization header was missing', 401, {
        #     'WWW-Authenticate': 'TOKEN realm="%s"' % realm
        # })

    parts = auth.split()


    if parts[0].lower() != 'bearer':
        logger.debug('Unsupported authorization type')
        abort(500, 'Unsupported authorization type')

        # raise TOKENError('Invalid TOKEN header', 'Unsupported authorization type')
    elif len(parts) == 1:
        logger.debug('Token missing')
        abort(500, 'Token missing')

        #raise TOKENError('Invalid TOKEN header', 'Token missing')
    elif len(parts) > 2:
        logger.debug('Token contains spaces')
        abort(500, 'Token contains spaces')

        #raise TOKENError('Invalid TOKEN header', 'Token contains spaces')

    logger.info('Authorization:' + parts[1])

    tok = Users.query.filter_by(ext_id = parts[1]).first()
    if tok is None or not tok:
        logger.debug('Token does not exist')
        abort(500, 'Token does not exist')

        #raise TOKENError('Invalid TOKEN', 'Token does not exist')
    else:
        g.user = tok
        return tok


def authenticate(func):
    """
    View decorator that requires a valid token to be present in the request
    WITH Flask-Restful
    """
    @wraps(func)
    def wrapper(*args, **kwargs):
        if not getattr(func, 'authenticated', True):
            return func(*args, **kwargs)

        acct = verify_token()  # custom account lookup function

        if acct:
            return func(*args, **kwargs)
        logger.debug('Error request, check http header!')
        abort(401, 'Error request, check http header!')
    return wrapper


def token_required(realm=None):
    """
    View decorator that requires a valid token to be present in the request
    WITH OUT Flask-Restful
    :param realm: an optional realm
    """
    def wrapper(fn):
        @wraps(fn)
        def decorator(*args, **kwargs):
            verify_token(realm)
            return fn(*args, **kwargs)
        return decorator
    return wrapper
