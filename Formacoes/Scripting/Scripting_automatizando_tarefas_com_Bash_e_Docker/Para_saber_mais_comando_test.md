# Para saber mais: comando test

O comando `test`, também conhecido como `[ ]`, é um comando interno do Bash e é comumente
usado em conjunto com a estrutura de controle `if` para realizar testes condicionais. Ele avalia
expressões e retorna um valor verdadeiro ou falso, dependendo do resultado do teste.

A sintaxe básica do comando test é:

```shell
test expressão
```

ou

```shell
[ expressão ]
```

Onde a `expressão` é uma condição que será avaliada.

Aqui está um exemplo do uso do comando `test` ou `[ ]` em conjunto com o `if`, que testa se um
arquivo existe:

```bash
#!/bin/bash
if [ -e arquivo.txt ]; then
    echo "O arquivo existe."
else
    echo "O arquivo não existe."
fi
```
