#!/bin/bash

arquivo=$1

# Verifica a quantidade de parâmetros
if [ $# -ne 1 ]; then
    echo "Uso: $0 arquivo"
    exit 1
fi

# Verifica a existência do arquivo
if [ ! -f "$arquivo" ]; then
    echo "O arquivo $1 não existe."
    exit 1
fi

# Verifica a existência de marcações de conflito de merge
if grep -q -E '<+|=+|>+' $arquivo; then
    echo "O arquivo $arquivo contém marcações de conflito de merge"
else
    echo "O arquivo $arquivo não contém marcações de conflito de merge"
fi
