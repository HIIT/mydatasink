import os

'''
Only modify those item with 'Modify:'
'''
# ===============================================================
# don't change if you don't know what's it
# ===============================================================
HOST = '0.0.0.0'

# ===============================================================
# Modify: Sink should start from 20001
# ===============================================================
PORT = '20000'

# ===============================================================
# Modify: This is DataSink XXX
# ===============================================================
APP_NAME = 'DataSink'

# ===============================================================
# Modify: Global Service ID
# if DataSource is 1,2,3
# then DataSink starts 4.
# ===============================================================
APP_GLOBAL_ID = '4'

# ===============================================================
# Modify: Local Logs
# ===============================================================
SECRET_KEY = 'secretforsink'+ APP_GLOBAL_ID

# ===============================================================
# Modify: Mysql
# ===============================================================
MYSQL_USER = 'root'
MYSQL_PASS = 'XmNT86Pi'
MYSQL_ADDRESS = '127.0.0.1'
MYSQL_DATABASE = 'datasink'+ APP_GLOBAL_ID

SQLALCHEMY_DATABASE_URI = 'mysql+mysqldb://'+MYSQL_USER+':'+MYSQL_PASS+'@'+MYSQL_ADDRESS+'/'+MYSQL_DATABASE

# ===============================================================
# Config File Address
# ===============================================================
# config file uri
CONFIG_URI = 'http://127.0.0.1:8080/config'
CONFIG_USER = 'testuser'
CONFIG_PASS = 'Hello'


# ===============================================================
# Root Path for DataSink
# ===============================================================
APP_ROOT = os.path.dirname(os.path.abspath(__file__))


# ===============================================================
# Local Logs
# ===============================================================
LOG_PATH = os.path.join(APP_ROOT, 'logs/log.txt')


SQLALCHEMY_COMMIT_ON_TEARDOWN = True














