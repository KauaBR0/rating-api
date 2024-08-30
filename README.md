Serviço responsavel pela avaliação de serviço prestrado no sistema de barbearia

techs:
- NodeJs
- Express
- Docker
- Mongo
- Nginx

# PARA RODAR
* Crie o arquivo .env com suas credenciais
* npm install
* docker compose up
---
* POST /api/rating: Para criar um novo rating, selecione "POST" como método, insira a URL http://localhost/api/, clique na aba "Body", selecione "raw" e "JSON" como tipo, e insira um objeto JSON com os campos rating, idWorker e idService.

```
{
  "rating": "2",
  "idWorker": "1",
  "idService": "3",
  "idUser": "1"
}
```

* GET /api/rating/:idService: Para obter um rating específico, selecione "GET" como método, insira a URL http://localhost/api/rating/{idService}, substituindo {idService} pelo ID do serviço que você deseja buscar.

* PUT /api/rating/:id: Para atualizar um rating, selecione "PUT" como método, insira a URL http://localhost/api/{id}, substituindo {id} pelo ID do rating que você deseja atualizar, clique na aba "Body", selecione "raw" e "JSON" como tipo, e insira um objeto JSON com os campos que você deseja atualizar.

```
{
  "rating": "2",
  "idWorker": "1",
  "idService": "3",
  "idUser": "1"
}
```

* DELETE /api/rating/:idService: Para deletar um rating, selecione "DELETE" como método e insira a URL http://localhost/api/{idService}, substituindo {idService} pelo ID do serviço cujo rating você deseja deletar.

* GET /api/rating: Para obter todos os ratings, selecione "GET" como método e insira a URL http://localhost/api/.
