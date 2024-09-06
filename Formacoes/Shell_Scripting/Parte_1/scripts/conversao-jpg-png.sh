#!/bin/bash

function converte_imagem() {
    cd ../data

    if [ ! -d png ]; then
        mkdir png
    fi

    for image in jpg/*.jpg; do
        local image_without_extension=$(ls "$image" | awk -F / '{print $2}' | awk -F . '{print $1}')
        convert jpg/"$image_without_extension".jpg png/"$image_without_extension".png
    done
}

converte_imagem 2> ../log/erros_conversao.txt
if [ $? -eq 0 ]; then
    echo 'Conversão realizada com sucesso.'
else
    echo 'Houve uma falha no processo'
fi
