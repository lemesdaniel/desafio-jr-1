# Desafio Pessoas de Tech.

Nesse desafio, utilizei:

* Java
* Spring Boot na versão 2.4.4.
* Banco H2
* Lombok

##	Os seguintes end-points foram implementados.

- `GET /post` (Listar todos os Posts por ID)
- `GET /post/data` (Listar todos os Post ordenado por Data)
- `GET /post/{id}` (Acha os posts por id)
- `POST /post` (Adiciona um novo post)
- `DELETE /post/{id}` (Exclui post por ID)
- `PUT /post/{id}` (Faz o update do post por id)

OBS => 

Para adicionar um post, eu utilizei esse body como teste.

```json
{
    "title" : "Criando um Post na API",
    "description" : "Hoje vamos criar um post em uma API de teste",
    "body" : "Primeiro, você provavelmente deve usar o postman para fazer as requisições"
}
```

Para fazer um update utilizei esse body como teste.

```json
{
    "title" : "Como fazer a bateria do celular durar mais!!!",
    "description" : "Hoje vamos te ensinar como usar melhor o celular",
    "body" : "Primeira dica: compre outro, celular velho só da problema."
}
```



Não possui muita experiência com docker e com testes ainda estou estudando como funciona por isso não foi implementado.
