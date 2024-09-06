#!/bin/bash

# Verifica conflito de merge.
function verifica_conflito() {
    local arquivo="$1"
    if grep -q -E '<+|=+|>+' "$arquivo"; then
        echo "O arquivo $arquivo contém marcação de conflito."
    fi
}

# Varre o diretório informado
function verifica_diretorio() {
    local diretorio="$1"
    local arquivo
    local arquivos=("$diretorio"/*)
    local i=0

#    for arquivo in "$diretorio"/*; do
#        arquivo="${arquivos[$i]}"
#        if [ -f "$arquivo" ]; then
#            verifica_conflito "$arquivo"
#        elif [ -d "$arquivo" ]; then
#            verifica_diretorio "$arquivo"
#        fi
#    done

    while [ $i -lt ${#arquivos[@]} ]; do
        arquivo="${arquivos[$i]}"
        if [ -f "$arquivo" ]; then
            verifica_conflito "$arquivo"
        elif [ -d "$arquivo" ]; then
            verifica_diretorio "$arquivo"
        fi
        ((i++))
    done
}

# Verifica a quantidade de parâmetros
if [ $# -ne 1 ]; then
    echo "Uso: $0 <diretorio>"
    exit 1
fi

# Verifica a existência do diretório
if [ ! -d "$1" ]; then
    echo "Diretório não encontrado: $1"
fi

verifica_diretorio "$1"
