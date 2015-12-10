#!/usr/bin/env python2.7
# -*- coding: utf-8 -*-


"""
    @package dhrlogging
    @author Xiaoxiao Xiong
    @date 01/07/2015
    @version 0.1
    <pre><b>email: </b>shawnhsiung07@gmail.com</pre>
    <pre><b>company: </b>DHR</pre>
    @brief  the purpose of logging package is to log some related message
            when application running, and send it to remote server via
            HTTPHander or store it at local files, it up to user who can
            modify the configuration at setting.py
"""

from dhrlogging.logger import DHRLogger
from dhrlogging.formatter import JsonFormatter
from dhrlogging.setting import LoggingConf
from dhrlogging.handler import JsonHTTPHandler
from dhrlogging.datetime import GMTFormatter
