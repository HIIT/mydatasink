#!/bin/bash

source config.sh


MYSQL_CMD="mysql -h${HOSTNAME}  -P${PORT}  -u${USERNAME} -p${PASSWORD}"
echo ${MYSQL_CMD}

echo "create database ${DBNAME}"

create_db_sql="create database IF NOT EXISTS ${DBNAME}"
echo ${create_db_sql}  | ${MYSQL_CMD}
if [ $? -ne 0 ]
then
 echo "create databases ${DBNAME} failed ..."
 exit 1
fi
