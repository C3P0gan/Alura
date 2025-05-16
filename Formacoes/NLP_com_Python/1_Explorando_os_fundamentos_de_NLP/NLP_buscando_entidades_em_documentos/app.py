from spacy_streamlit import visualize_ner
import streamlit as st
import spacy

st.title("Reconhecimento de Entidades Nomeadas (NER)")

modelo = spacy.load("./modelo")

rotulos = list(modelo.get_pipe('ner').labels)

cores = {
    'B-JURISPRUDENCIA': '#f0f8ff',
    'B-LEGISLACAO': '#fa8072',
    'B-LOCAL': '#98fb98',
    'B-ORGANIZACAO': '#dda0dd',
    'B-PESSOA': '#f0e68c',
    'B-TEMPO': '#ffb6c1',
    'I-JURISPRUDENCIA': '#f0f8ff',
    'I-LEGISLACAO': '#fa8072',
    'I-LOCAL': '#98fb98',
    'I-ORGANIZACAO': '#dda0dd',
    'I-PESSOA': '#f0e68c',
    'I-TEMPO': '#ffb6c1',
    'LOC': '#d3d3d3',
    'MISC': '#d3d3d3',
    'ORG': '#d3d3d3',
    'PER': '#d3d3d3'
}

opcoes = {'ents': rotulos, 'colors': cores}

escolha = st.radio("Escolha uma opção:", options=["Texto", "Arquivo"])

texto = ""

if escolha == "Texto":
    texto = st.text_area("Insira o texto:")
elif escolha == "Arquivo":
    arquivo = st.file_uploader(
        "Faça o upload do arquivo (somente .txt)", type="txt")
    if arquivo is not None:
        texto = arquivo.read().decode("utf-8")

doc = modelo(texto)

visualize_ner(
    doc,
    labels=rotulos,
    displacy_options=opcoes,
    title='Reconhecimento de Entidades Nomeadas'
)
