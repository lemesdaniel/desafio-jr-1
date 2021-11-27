# Como utilizar

- Com o projeto aberto no Vscode ou outro editor, digite o comando yarn para instalar as dependencias
- Digite o comando yarn dev para rodar o servidor
- Para testar a aplicação, você pode usar o Insomnia. Na raiz do projeto tem um arquivo .json para ser importado como template.
- Rotas para teste:
  - http://localhost:3001/api/post - GET/POST/PUT/DELETE
  - http://localhost:3001/api/post/:id - GET

# Notas sobre o projeto

- Pretendo "Dockerizar" a aplicação com o passar das semanas, tive problemas para fazer a comunicação entre o container da aplicação e do DB. Além disso, tive problemas na conexão com o Typeorm, por algum motivo não encontrava as configurações "default" e pra fazer funcionar, precisei colocar aquele código no server.ts, que primeiro cria a conexão e depois chama o app.listen. Geralmente pra mim funcionava apenas criando a conexão antes de chamar as rotas no app.ts

- A aplicação em si foi desenvolvida usando TDD, acompanho o trabalho do Rodrigo Manguinho e gosto de me basear nos projetos dele. Preciso me aprofundar em DDD para ter mais dominio da arquitetura em si e indpendência na hora de precisar improvisar e criar do 0.
