# Getting started
If you want to use the code then continue, if not just goto [***DataOperator***](https://github.com/dhrproject/mydataoperator)
for more information. You can use the [***Docker Image***](https://hub.docker.com/r/dhrpoc/dhr/) to setup a demo environment.

You can use the demo account for all code related stuff.
username :  testuser
password :  Hello

## DataSink
Edit /DataSink/config.py 
```Python
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
CONFIG_URI = 'http://178.62.244.150:8080/config'
CONFIG_USER = 'testuser'
CONFIG_PASS = 'Hello'
```

## DataSink UI
edit /DataSink-UI/js/demo/config.js
```
var DSINK_API_BASE_URI = 'http://dhr-demo.csc.fi:20001/api/v0.1';
```
Host the UI code somewhere