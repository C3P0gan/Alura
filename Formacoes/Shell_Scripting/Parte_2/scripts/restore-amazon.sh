#!/bin/bash

CAMINHO_RESTORE=/home/cristoffer_pogan/Entwicklung/Tutorials/Alura/Formacao_Shell_Scripting/Parte_2/restore_mutillidae_amazon
aws s3 sync s3://shell-scripting/$(date +%F) $CAMINHO_RESTORE

cd $CAMINHO_RESTORE
if [ -f $1.sql ]; then
    sudo mysql -u root mutillidae < $1.sql
    if [ $? -eq 0 ]; then
        echo 'O restore foi realizado com sucesso.'
    fi
else
    echo 'O arquivo procurado não existe no diretório'
fi
