# 🚗 API de Coleção de Carros

API RESTful desenvolvida com Node.js, Express e MongoDB para gerenciar uma coleção de carros e seus colecionadores.

## 📌 Sobre o projeto

Este projeto permite cadastrar amigos colecionadores e os carros que cada um possui. É possível criar, listar, buscar, atualizar e deletar tanto os amigos quanto os carros, com suporte a filtros e deleção lógica.

## 🛠️ Tecnologias utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- config

## 📁 Estrutura de pastas

```
├── config/
│   └── default.json
├── src/
│   ├── controllers/
│   │   ├── carController.js
│   │   └── personController.js
│   ├── models/
│   │   ├── carModel.js
│   │   └── personModel.js
│   └── routes/
│       ├── carRoutes.js
│       └── personRoutes.js
├── startup/
│   ├── db.js
│   └── router.js
└── index.js
```

## ▶️ Como rodar o projeto

**1. Clone o repositório**
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

**2. Instale as dependências**
```bash
npm install
```

**3. Configure o banco de dados**

Edite o arquivo `config/default.json` com a sua URI do MongoDB:
```json
{
  "db": "mongodb://127.0.0.1:27017/carros"
}
```

**4. Inicie o servidor**
```bash
node index.js
```

O servidor vai rodar em `http://localhost:8080`

## 🔗 Endpoints

### Pessoas (Colecionadores)

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /api/people | Lista todas as pessoas |
| GET | /api/people/:id | Busca pessoa por ID |
| POST | /api/people | Cadastra nova pessoa |
| PUT | /api/people/:id | Atualiza pessoa |
| DELETE | /api/people/:id | Remove pessoa |

### Carros

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /api/cars | Lista todos os carros ativos |
| GET | /api/cars?brand=Ford | Filtra por marca |
| GET | /api/cars?year=2020 | Filtra por ano |
| GET | /api/cars/:id | Busca carro por ID |
| POST | /api/cars | Cadastra novo carro |
| PUT | /api/cars/:id | Atualiza carro |
| DELETE | /api/cars/:id | Deleção lógica (isActive: false) |

## 📝 Exemplo de cadastro

**Cadastrar pessoa**
```json
POST /api/people
{
  "name": "João",
  "lastName": "Silva",
  "email": "joao@email.com",
  "age": 28
}
```

**Cadastrar carro**
```json
POST /api/cars
{
  "brand": "Ford",
  "model": "Mustang",
  "year": 2021,
  "km": 15000,
  "turbo": true,
  "owner": "id_da_pessoa_aqui"
}
```