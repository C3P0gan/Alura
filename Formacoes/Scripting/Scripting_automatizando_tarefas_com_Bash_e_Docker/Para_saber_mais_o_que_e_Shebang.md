# 07 Para saber mais: o que é o Shebang?

Shebang é um termo informal usado para se referir à sequência de caracteres "#!" (hash-bang) no
início de um arquivo de script em sistemas operacionais baseados em Unix, como Linux, macOS e
outros sistemas Unix-like. Essa sequência indica ao sistema operacional qual interpretador de
comandos deve ser usado para executar o script.

Por exemplo, se você tem um script em Python chamado `meu_script.py`, o shebang seria `#!/usr/
bin/env python` se você quisesse que o interpretador Python padrão fosse usado para executar o
script.

Quando você executa um script com o shebang, o sistema operacional usa o interpretador
especificado após o shebang para processar o script. Isso permite que você escreva scripts em várias
linguagens de programação e execute-os diretamente no shell sem precisar especificar
explicitamente o interpretador.

Aqui estão alguns exemplos de shebangs para diferentes linguagens de programação:

```python
#!/usr/bin/env python
```

```perl
#!/usr/bin/perl
```

```bash
#!/bin/bash
```

```ruby
#!/usr/bin/env ruby
```

```shell
#!/bin/sh
```

```php
#!/usr/bin/env php
```

```node
#!/usr/bin/env node
```

```lua
#!/usr/bin/env lua
```

Esses são apenas alguns exemplos. Você pode usar o shebang com praticamente qualquer
linguagem de programação para indicar ao sistema operacional qual interpretador deve ser usado
para executar o script.
