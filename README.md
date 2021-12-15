# Desafio Back-End para desenvolvedores iniciantes

Resolução do desafio proposto por [@dlemesdanie](https://github.com/lemesdaniel/)

Ferramentas utilizadas:
- Python 3.9
- [FastApi](https://fastapi.tiangolo.com/)
- [Docker](https://www.docker.com/)
- [PostegreSQL](https://www.postgresql.org/)


## Como Utilizar
- Com o terminal aberto no diretório do projeto digite `docker-compose up -d`
- Após o docker subir os containers o projeto está rodando localmente em: `http://localhost:8000/`

## Rotas da API:
- `http://localhost:8000/posts` : Métodos POST, DELETE, PATCH GET(by Id e all)
- `http://localhost:8000/posts/filterbydate` : Método GET para o filtro por data
