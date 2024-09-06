#!/bin/bash

CAMINHO_BACKUP=/home/cristoffer_pogan/Entwicklung/Tutorials/Alura/Formacao_Shell_Scripting/Parte_2/backup_mutillidae_amazon
cd $CAMINHO_BACKUP
data=$(date +%F)
if [ ! -d $data ]; then
    mkdir $data
fi

tabelas=$(sudo mysql -u root mutillidae -e 'show tables;' | grep -v Tables)
for tabela in $tabelas; do
    sudo mysqldump -u root mutillidae $tabela > $CAMINHO_BACKUP/$data/$tabela.sql
done

aws s3 sync "$CAMINHO_BACKUP" s3://shell-scripting
