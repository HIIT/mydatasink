LoggingConf = {
    'version': 1,
    'disable_existing_loggers': False,
    'incremental': False,
    'formatters': {
        'precise': {
            '()': 'dhrlogging.datetime.GMTFormatter',
            'format': '%(levelname)s %(asctime)s <PID %(process)d:%(processName)s> <PID %(thread)d:%(threadName)s> %(pathname)s %(funcName)s %(message)s',
            'datefmt':'%Y-%m-%d %H:%M:%S'
        },
        'simple': {
            '()': 'dhrlogging.datetime.GMTFormatter',
            'format': '%(asctime)s %(levelname)-8s %(message)s',
            'datefmt':'%Y-%m-%d %H:%M:%S'
        },
        'jsonformatter': {
            '()': 'dhrlogging.formatter.JsonFormatter',
            'format': '%(levelname)s %(asctime)s %(process)d %(processName)s %(thread)d %(threadName)s %(pathname)s %(funcName)s %(message)s',
            'datefmt':'%Y-%m-%d %H:%M:%S'
        }
    },
    'filters': {
    },
    'handlers': {
        'null': {
            'level': 'DEBUG',
            'class': 'logging.NullHandler'
        },
        'console': {
            'level': 'DEBUG',
            'class': 'logging.StreamHandler',
            'formatter': 'simple'
        },
        'info_file_handler': {
            'class': 'logging.handlers.RotatingFileHandler',
            'level': 'INFO',
            'formatter': 'simple',
            'filename': 'logs/info.log',
            'maxBytes': 10485,
            'backupCount': 20,
            'encoding': 'utf8'
        },
        'error_file_handler': {
            'class': 'logging.handlers.RotatingFileHandler',
            'level': 'ERROR',
            'formatter': 'precise',
            'filename': 'logs/error.log',
            'maxBytes': 10485,
            'backupCount': 20,
            'encoding': 'utf8'
        },
        'server': {
            'class': 'dhrlogging.handler.JsonHTTPHandler',
            'level': 'ERROR',
            'host': 'dhrproject.ml:5005',
            'url': '/api/v0.1/logs',
            'method': 'POST',
            'formatter': 'jsonformatter'
        }
    },
    'loggers': {
        'dhr': {
            'handlers': [
                'console',
                'info_file_handler',
                'error_file_handler',
                'server'
            ],
            'propagate': False,
            'level': 'INFO'
        },
         'dhr.operator': {
            'handlers': [
                'server'
            ],
            'propagate': True,
            'level': 'ERROR'
        },
        'dhr.source': {
            'handlers': [
                'server'
            ],
            'propagate': True,
            'level': 'ERROR'
        },
        'dhr.sink': {
            'handlers': [
                'server'
            ],
            'propagate': True,
            'level': 'ERROR'
        }
    },
    'root': {
        'level': 'INFO',
        'handlers': [
            'null',
            'console',
            'info_file_handler',
            'error_file_handler',
            'server'
        ]
    }
}
