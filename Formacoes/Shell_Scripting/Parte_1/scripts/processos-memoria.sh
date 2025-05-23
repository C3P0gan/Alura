#!/bin/bash

if [ ! -d ../log ]; then
    mkdir ../log
fi

function processos_memoria() {
    processos=$(ps -e -o pid --sort -size | head -n 11 | grep [0-9])
    for pid in $processos; do
        nome_processo=$(ps -p $pid -o comm=)
        tamanho_processo=$(ps -p $pid -o size | grep [0-9])
        echo -n $(date +%F,%T,) >> ../log/"$nome_processo".log
        echo "$(bc <<< "scale=2;$tamanho_processo/1024") MB" >> ../log/"$nome_processo".log
    done
}

processos_memoria
if [ $? -eq 0 ]; then
    echo 'Os arquivos foram salvos com sucesso'
else
    echo 'Houve um problema ao salvar os arquivos'
fi
