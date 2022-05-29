
### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Docker](https://www.docker.com/)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/fernandotorrigo/api-node-docker.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd api-node-docker

# Inicie a aplicação nodejs e mysql
$ docker-compose up 

# Execute este comando para limpar toda a base e subir novamente a aplicação com os dados iniciais nas tabelas
$ docker-compose down --rmi all && docker-compose up 

# O servidor inciará na porta:3333 - acesse <http://localhost:21061>

# Rotas
$ (GET) http://127.0.0.1:21061/user (listar todos usuarios)
$ (GET) http://localhost:21061/user/id (Listar um usuário])
$ (POST) http://localhost:21061/user/new (criar novo usuario)
$ (PATCH) http://localhost:21061/user/id (editar usuario)
$ (DELETE) http://localhost:21061/user/id (deletar usuario)

# payload cadastrar/editar
{
    "name": "Fernando Torrigo",
    "email": "torrigo@gmail.com",
    "job": 2,
    "reports_to": 3
}

```