#!/bin/bash

data=$(date +%F_%T)

uso_disco=$(df -h | grep /dev/nvme0n1p3 | awk '{print $5}')

echo "[$data] Uso de disco em $uso_disco" >> monitoramento-disco.log
