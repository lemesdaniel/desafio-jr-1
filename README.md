# Desafio Back-End para desenvolvedores iniciantes

Esse é o nosso desafio para os deseja uma revisão/mentoria minha (@dlemesdaniel)

Como isso vai funcionar:
- Isso é não é um processo seletivo.
- Eu vou revisar e fazer um code review.
- vou enviar um feedback com sugestão de estudos para a pessoa continuar o seu desenvolvimento.
- Semanalmente eu vou pegar os pull requests que houverem aqui e vou chamar a pessoa que desenvolveu para marcar uma call onde vou revisar e enviar um feedback sobre o desafio.

O desafio deve ser escrito em php com qualquer framework ou sem o uso de algum.

# O Desafio

Precisamos de uma API que sirva o Back-end de um blog. Essa API precisa ser capaz de:

- Criar um Post
- Editar um Post
- Deletar um Post
- Listar os Posts de maneira paginada, permitindo filtro por data.
- Obter informações de um Post por ID.

A entidade `Post`, deve ter os seguintes campos:

- id -> Identificador do Post.
- title -> Título do Post.
- description -> Descrição do Post.
- body -> Corpo do Post.
- created_at -> Data de criação do Post.
- updated_at -> Data de atualização do Post.

Você pode utilizar qualquer banco, desde que ele seja [SQL](http://www.sqlcourse.com/intro.html).

## Requisitos

- Todas as respostas precisam ser retornadas no formato [JSON](https://www.json.org/json-en.html).
- Crie um `README.md` com as informações de como usar sua aplicação. (como executar, quais são as rotas, etc)

## Diferenciais

- [Dockerize](https://www.docker.com/) sua aplicação.
- Crie testes unitários para a sua aplicação.
- Utilize os princípios SOLID em sua aplicação.

## Como entregar o teste

1. Faça um fork desse repositório.
2. Resolva o desafio da melhor maneira que você puder.
3. Envie um pull-request para análise do resultado.
