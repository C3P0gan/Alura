import os
import sys
import subprocess


def criar_ambiente(diretorio_projeto: str) -> None:
    if not os.path.exists(diretorio_projeto):
        print('O diretório informado não existe.')
        return

    venv_path = os.path.join(diretorio_projeto, '.venv')
    if os.path.exists(venv_path):
        print('O ambiente virtual já existe.')
        return

    try:
        subprocess.run(['python', '-m', 'venv', venv_path])
        print('Ambiente virtual criado com êxito.')
    except subprocess.CalledProcessError as e:
        print(f'Erro ao criar o ambiente: {e}')


def instalar_dependencias(
    diretorio_projeto: str,
    requirements_file: str
) -> None:
    if not os.path.exists(diretorio_projeto):
        print('O diretório informado não existe.')
        return

    venv_path = os.path.join(diretorio_projeto, '.venv', 'bin', 'python')

    try:
        subprocess.run(
            [venv_path, '-m', 'pip', 'install', '-r', requirements_file],
            check=True
        )
        print('Dependências instaladas com sucesso.')
    except subprocess.CalledProcessError as e:
        print(f'Erro ao instalar as dependências: {e}')


def main():
    if len(sys.argv) != 2:
        print('Uso: python script_venv.py /caminho/do/diretório')
        sys.exit(1)

    diretorio_projeto = sys.argv[1]
    requirements_file = os.path.join(diretorio_projeto, 'requirements.txt')
    criar_ambiente(diretorio_projeto)
    instalar_dependencias(diretorio_projeto, requirements_file)


if __name__ == '__main__':
    main()
