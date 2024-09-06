#!/bin/bash

resposta_http=$(curl --write-out %{http_code} --silent --output /dev/null https://cdn3.gnarususercontent.com.br/shell-script/parte2/aula_2/index.htm)
if [ $resposta_http -ne 200 ]; then
mail -s 'Problema no servidor' cristoffer_pogan@econeteditora.com.br << del
Houve um problema no servidor e os usuários pararam de ter acesso ao conteúdo web.
del
    # systemctl restart apache2
fi
