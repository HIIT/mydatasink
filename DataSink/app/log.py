#!/usr/bin/env python2.7
# -*- coding: utf-8 -*-
'''
__title__ = 'logger'
__mtime__ = '02/06/15'
'''

import logging

from app import app


class CLog:
    '''!
    Store logging into log.txt and print
    '''

    def __init__(self):
        self.logger = logging.getLogger()
        fileHandler = logging.FileHandler(app.config['LOG_PATH'])
        formatHandler = logging.Formatter('%(asctime)s %(levelname)s: %(message)s')
        fileHandler.setFormatter(formatHandler)

        console = logging.StreamHandler()
        formatter = logging.Formatter('%(asctime)s %(levelname)s: %(message)s')
        console.setFormatter(formatter)

        self.logger.addHandler(console)
        # self.logger.addHandler(fileHandler)
        self.logger.setLevel(logging.NOTSET)


    def debug(self, msg):
        self.logger.debug(msg)


    def info(self, msg):
        self.logger.info(msg)

    def error(self, msg):
        self.logger.error(msg)


logger = CLog()


# '''!
# post log to a http server
# @usage logger.info("this is a info msg!",extra={"sender": "DSource"})
# @usage logger.error("classic message", extra={"sender": "DSink"})
# @usage logger.critical("this is a critical msg!", extra={"sender": "Doperator"})
# '''
# from dhrlogging import DHRLogger
# logger = DHRLogger.getLogger('sink')

