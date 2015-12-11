# Data Sink

This is a part of proof-of-concept implementation of [MyData Architecture](https://github.com/HIIT/mydata-stack). More information about the POC-implementation see [DataOperator](https://github.com/dhrproject/mydataoperator)

## Repository structure
```
.
├── DataSink
│   ├── Doxyfile                            DoxyGen config file
│   ├── app                                 app package
│   │   ├── __init__.py                     init the app
│   │   ├── api_0_1                         blueprint for api v0.1
│   │   │   ├── __init__.py                 
│   │   │   ├── auth.py                     token authorization api endpoint
│   │   │   ├── contract.py                 send contract to DataOperator
│   │   │   ├── receipt.py                  receipts related api endpoint
│   │   │   ├── resource.py                 resource related apt endpoint
│   │   │   ├── status.py                   check DataSink work status
│   │   │   ├── ui_receipts.py              nothing
│   │   │   └── user.py                     user related api endpoint
│   │   ├── db_handler.py                   nothing
│   │   ├── error.py                        error messages
│   │   ├── log.py                          log class
│   │   ├── models.py                       database module
│   │   ├── token_verify.py                 token verify related decorators
│   │   └── utils.py                        utils
│   ├── config.py                           main configuration
│   ├── dhrlogging                          logging module
│   │   ├── __init__.py
│   │   ├── datetime.py
│   │   ├── formatter.py
│   │   ├── handler.py
│   │   ├── logger.py
│   │   └── setting.py
│   ├── requirements.txt                    minimum requirements for DataSink
│   ├── requirements_all.txt                maxmum requirements for DataSink
│   ├── run.py                              app entry point
│   ├── scripts                             scripts for app
│   │   ├── addUser.sh
│   │   ├── config.sh
│   │   ├── create_db.sh
│   │   └── del_db.sh
│   └── test                                scripts for test
│       ├── testLocal.py
│       └── testRemote.py
├── DataSink-UI                             UI
│   ├── index.html
│   ├── js
│   │   ├── demo
│   │   │   ├── config.js                   configuration
│   ├── json
│   │   ├── data.json
│   │   ├── datamini.json
│   │   ├── newdata
│   │   ├── nutrition.js
│   │   └── nutrition.json
│   ├── login.html
│   ├── nutrition.html
│   ├── profile.html
│   └── sports.html
└── Doc                                     API documantation
    ├── DataSink-API-Swagger.yaml
    ├── DataSink-API-Swagger.pdf
    └── How to Config.md
```

## API Documents
We use [Swagger.io](http://swagger.io/), so you can copy [```DOC/DataSink-API-Swagger.yaml```](https://github.com/dhrproject/mydatasink/blob/master/DOC/DataSink-API-Swagger.yaml) and paste it to [Swagger Editor](http://editor.swagger.io/) .
Also, we provide a pdf version [```DOC/DataSink-API-Swagger.pdf```](https://github.com/dhrproject/mydatasink/blob/master/DOC/DataSink-API-Swagger.pdf). 

## Copying and License
This code is licensed under MIT






