# 🍔 DevBurger API

API REST responsável pelo gerenciamento da hamburgueria online, autenticação, produtos, categorias, pedidos e integração com pagamentos Stripe.

## 👨‍💻 Funcionalidades

* Cadastro de usuários
* Login com JWT
* Controle de permissões
* Cadastro de produtos
* Cadastro de categorias
* Gerenciamento de pedidos
* Upload de imagens
* Integração com Stripe
* Webhooks para confirmação de pagamentos

---

## 🛠 Tecnologias Utilizadas

* Node.js
* Express
* PostgreSQL
* Sequelize
* JWT
* Bcrypt
* Multer
* Stripe

---

## ⚙️ Variáveis de Ambiente

Crie um arquivo `.env`:

```env

DB_USER=
DB_PASSWORD=
DB_NAME=
STRIPE_KEY= 
```

---

## ▶️ Executando o Projeto

Instalar dependências:

```bash
yarn install
```

Executar migrations:

```bash
npx sequelize-cli db:migrate
```

Iniciar servidor:

```bash
yarn dev
```

---

## 🔐 Autenticação

A API utiliza JWT (JSON Web Token) para proteger rotas administrativas.

Exemplo de Header:

```http
Authorization: Bearer seu_token
```

---

## 💳 Integração com Stripe

Fluxo de pagamento:

1. Cliente realiza pedido.
2. API cria sessão de checkout.
3. Stripe processa o pagamento.
4. Webhook confirma a transação.
5. Pedido é atualizado automaticamente.

---

## 📡 Principais Rotas

### Usuários

```http
POST /users
POST /sessions
```

### Categorias

```http
GET /categories
POST /categories
```

### Produtos

```http
GET /products
POST /products
PUT /products/:id
DELETE /products/:id
```

### Pedidos

```http
GET /orders
PUT /orders/:id
```

---


## 👨‍💻 Autor

Yago Oliveira

Desenvolvedor Full Stack em formação focado em React, Node.js e APIs REST.
