#!/bin/bash

source config.sh

# Detect paths
MYSQL=$(which mysql)
AWK=$(which awk)
GREP=$(which grep)


TABLES=$($MYSQL -u $USERNAME -p$PASSWORD $DBNAME -e 'show tables' | $AWK '{ print $1}' | $GREP -v '^Tables' )

for t in $TABLES
do
	echo "Deleting $t table from $DBNAME database..."
	$MYSQL -u $USERNAME -p$PASSWORD $DBNAME -e "drop table $t"
done