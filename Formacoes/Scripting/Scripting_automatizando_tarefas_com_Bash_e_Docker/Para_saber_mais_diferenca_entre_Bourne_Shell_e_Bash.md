# 05 Para saber mais: diferença entre Bourne Shell e Bash

Bourne Shell e Bash (Bourne Again Shell) são interpretadores de linha de comando em sistemas
Unix e Unix-like. Embora compartilhem muitas semelhanças, existem algumas diferenças entre
eles:

## 1 - História e desenvolvimento

    - Bourne Shell (sh): criado por Stephen Bourne na década de 1970, foi o shell original do Unix.
    - Bash: desenvolvido por Brian Fox para o projeto GNU no final da década de 1980. É uma
            extensão do Bourne Shell com funcionalidades adicionais.

## 2 - Compatibilidade

    - Bourne Shell: é o shell básico encontrado em sistemas Unix, mas possui menos recursos
                    avançados em comparação com o Bash.
    - Bash: é retrocompatível com o Bourne Shell, o que significa que a maioria dos scripts escritos
            para o Bourne Shell também podem ser executados no Bash.

## 3 - Recursos adicionais

    - Bourne Shell: oferece funcionalidades básicas, como loops, condicionais e redirecionamento
                    de entrada/saída, mas não inclui muitos recursos avançados encontrados no Bash.

    - Bash: além das funcionalidades básicas do Bourne Shell, o Bash inclui recursos avançados,
            como expansão de brace, substituição de comandos, manipulação de histórico de comandos,
            autocompletar de comandos e variáveis, entre outros.

## 4 - Personalização

    - Bourne Shell: tem menos opções de personalização em comparação com o Bash.
    - Bash: oferece maior flexibilidade e personalização através do use de configurações, como
            arquivos de inicialização (como `.bashrc`, `.bash_profile`, etc.), permitindo que os usuários
            configurem o ambiente de acordo com suas preferências.

## 5 - Portabilidade

    - Bourne Shell: como é o shell padrão em sistemas Unix, os scripts escritos para Bourne Shell são
                    altamente portáteis e podem ser executados em uma variedade de sistemas Unix-like.

    - Bash: Embora não seja garantido que o Bash esteja presente em todos os sistemas Unix-like, é
            amplamente adotado e disponível na maioria das distribuições Linux e em muitos outros
            sistemas Unix-like.

Assim, enquanto o Bourne Shell é o shell padrão mais básico encontrado em sistemas Unix, o Bash é
uma extensão desse shell com recursos avançados e maior flexibilidade, tornando-o amplamente
preferido por muitos usuários.
