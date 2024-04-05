Serviço responsavel pela avaliação de serviço prestrado no sistema de barbearia

* POST /api/rating: Para criar um novo rating, selecione "POST" como método, insira a URL http://localhost:3000/api/rating, clique na aba "Body", selecione "raw" e "JSON" como tipo, e insira um objeto JSON com os campos rating, idWorker e idService.

* GET /api/rating/:idService: Para obter um rating específico, selecione "GET" como método, insira a URL http://localhost:3000/api/rating/{idService}, substituindo {idService} pelo ID do serviço que você deseja buscar.

* PUT /api/rating/:id: Para atualizar um rating, selecione "PUT" como método, insira a URL http://localhost:3000/api/rating/{id}, substituindo {id} pelo ID do rating que você deseja atualizar, clique na aba "Body", selecione "raw" e "JSON" como tipo, e insira um objeto JSON com os campos que você deseja atualizar.

* DELETE /api/rating/:idService: Para deletar um rating, selecione "DELETE" como método e insira a URL http://localhost:3000/api/rating/{idService}, substituindo {idService} pelo ID do serviço cujo rating você deseja deletar.

* GET /api/rating: Para obter todos os ratings, selecione "GET" como método e insira a URL http://localhost:3000/api/rating.
