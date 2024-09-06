#!/bin/bash

memoria_total=$(free | grep Speicher | awk '{print $2}')
memoria_consumida=$(free | grep Speicher | awk '{print $3}')
relacao_memoria_atual_total=$(bc <<< "scale=2; ($memoria_consumida / $memoria_total) * 100" | awk -F . '{print $1}')

if [ $relacao_memoria_atual_total -gt 50 ]; then
mail -s 'Consumo de memória acima do limite.' cristoffer_pogan@econeteditora.com.br << del
O consumo de memória está acima do limite especificado. Atualmente o consumo é de $(free -h | grep Speicher | awk '{print $3}')
del
fi
