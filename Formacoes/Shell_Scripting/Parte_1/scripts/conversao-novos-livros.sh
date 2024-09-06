#!/bin/bash

function converte_imagem() {
   local caminho_imagem="$1" 
   local imagem_sem_extensao=$(ls "$caminho_imagem" | awk -F / '{print $2}' | awk -F . '{print $1}')

   convert "$imagem_sem_extensao".jpg "$imagem_sem_extensao".png
}

function varrer_diretorio() {
    cd "$1"

    for arquivo in *; do
        local caminho_arquivo=$(find ./ -name "$arquivo")

        if [ "$caminho_arquivo" ]; then
            if [ -d "$caminho_arquivo" ]; then
                varrer_diretorio "$caminho_arquivo"
            else
                converte_imagem "$caminho_arquivo"
            fi
        fi
    done
}

varrer_diretorio ../data 2> ../log/erros_conversao.txt
if [ $? -eq 0 ]; then
    echo 'Conversão realizada com sucesso'
else
    echo 'Houve um problema na conversão'
fi
