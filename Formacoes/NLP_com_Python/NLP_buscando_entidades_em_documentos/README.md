[NLP: buscando entidades em documentos](https://cursos.alura.com.br/course/nlp-buscando-entidades-documentos)

---

Caso ocorra um erro ao tentar visualizar o documento usando `displacy`, execute o seguinte comando:

`nvim .venv/lib/python3.12/site-packages/spacy/displacy/__init__.py`

Procure por 'display' e altere o import de: `from IPython.core.display import HTML, display`
Para: `from IPython.display import HTML, display`
