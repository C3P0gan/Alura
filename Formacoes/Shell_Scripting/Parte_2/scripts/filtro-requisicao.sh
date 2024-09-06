#!/bin/bash

cd ../log

if [ -z $1 ]; then
    while [ -z $requisicao ]; do
        read -p 'Você esqueceu de colocar o parâmetro (GET, POST, PUT, DELETE): ' requisicao
        parametro=$(echo $requisicao | awk '{print toupper($1)}')
    done
else
    parametro=$(echo $1 | awk '{print toupper($1)}')
fi

case $parametro in
    GET)
    cat apache.log | grep GET
    ;;

    POST)
    cat apache.log | grep POST
    ;;

    PUT)
    cat apache.log | grep PUT
    ;;

    DELETE)
    cat apache.log | grep DELETE
    ;;

    *)
    echo 'O parâmetro passado não é valido.'
esac
