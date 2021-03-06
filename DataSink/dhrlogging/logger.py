#!/usr/bin/env python2.7
# -*- coding: utf-8 -*-

import logging
from dhrlogging.setting import LoggingConf
from logging.config import dictConfig

__author__ = 'Xiaoxiao.Xiong'

dictConfig(LoggingConf)


class DHRLogger:
    """Class DHRLogger is provided to get logger
    """
    __logger = None

    def __init__(self):
        pass

    @staticmethod
    def getLogger(name):
        if DHRLogger.__logger is not None:
            return DHRLogger.__logger

        DHRLogger.__logger = logging.getLogger(name)

        return DHRLogger.__logger
