#!/bin/bash

if [ ! -d ../backup ]; then
    mkdir ../backup
fi

sudo mysqldump -u root $1 > ../backup/$1.sql

if [ $? -eq 0 ]; then
    echo 'Backup realizado com sucesso'
else
    echo 'Houve um problema ao fazer o backup.'
fi
