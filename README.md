# 🍔 DevBurger API

API REST do **DevBurger**, uma aplicação de hamburgueria online desenvolvida com Node.js e Express. Responsável pela autenticação de usuários, gerenciamento de produtos, categorias e pedidos, além da integração com pagamentos e armazenamento de imagens.

🌐 **Frontend em produção:** [Acessar o DevBurger](https://interface-dev-burger.vercel.app/)

## 📌 Funcionalidades

- Cadastro e autenticação de usuários.
- Autenticação com JWT.
- Controle de acesso às rotas protegidas.
- Cadastro e gerenciamento de produtos.
- Cadastro e gerenciamento de categorias.
- Gerenciamento de pedidos.
- Upload e armazenamento de imagens no Supabase Storage.
- Persistência de dados em PostgreSQL.
- Integração com MongoDB.
- Integração com Stripe para processamento de pagamentos.

## 🛠️ Tecnologias utilizadas

- **Node.js** — ambiente de execução JavaScript.
- **Express** — criação das rotas e da API REST.
- **PostgreSQL** — banco de dados relacional.
- **Sequelize** — ORM para comunicação com PostgreSQL.
- **MongoDB** — banco de dados NoSQL.
- **Mongoose** — modelagem e integração com MongoDB.
- **JWT** — autenticação baseada em tokens.
- **bcrypt** — criptografia de senhas.
- **Multer** — tratamento de uploads de arquivos.
- **Supabase Storage** — armazenamento de imagens.
- **Stripe** — integração com pagamentos.
- **Yup** — validação de dados.
- **Sucrase** — suporte à execução do código JavaScript utilizado no projeto.

## 🏗️ Arquitetura

A aplicação é organizada em uma API backend que se comunica com o frontend e integra serviços externos.

- **Frontend:** React.js, hospedado na Vercel.
- **Backend:** Node.js e Express, hospedado no Render.
- **Banco relacional:** PostgreSQL, hospedado no Supabase.
- **Banco NoSQL:** MongoDB.
- **Armazenamento de imagens:** Supabase Storage.
- **Pagamentos:** Stripe.

## ⚙️ Configuração do ambiente

### Pré-requisitos

- Node.js instalado.
- Yarn instalado.
- Acesso aos serviços e bancos de dados utilizados pela aplicação.

### 1. Clone o repositório

```bash
git clone https://github.com/YagoAlves92/APIDevBurger.git
```

### 2. Entre na pasta do projeto

```bash
cd APIDevBurger
```

### 3. Instale as dependências

```bash
yarn install
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto e configure as variáveis utilizadas pela aplicação.

```env

PORT=3001
DATABASE_URL=
MONGO_URL=
JWT_SECRET=
STRIPE_KEY=
SUPABASE_URL=
SUPABASE_SECRET_KEY=

```

Preencha os valores conforme as configurações dos seus serviços. Inclua também a variável de chave do Supabase com o nome exato esperado pelo arquivo de configuração do projeto.

**Importante:** não compartilhe senhas, tokens ou chaves privadas e não envie o arquivo `.env` para o GitHub.

### 5. Execute as migrations

Se o banco ainda não estiver preparado, execute as migrations disponíveis no projeto:

```bash
npx sequelize-cli db:migrate
```

### 6. Inicie a API

```bash
yarn dev
```

Por padrão, o servidor utiliza a porta `3001` em ambiente local, podendo utilizar outra porta conforme a variável `PORT`.

## 🔐 Autenticação

A API utiliza JWT para autenticar usuários e proteger rotas que exigem autorização.

Após autenticar-se, envie o token no cabeçalho das requisições protegidas:

```http
Authorization: Bearer seu_token
```

## 📡 Principais rotas

### Usuários e autenticação

| Método | Rota | Descrição |
|---|---|---|
| POST | `/users` | Cadastro de usuário |
| POST | `/session` | Autenticação e geração de sessão |

### Categorias

| Método | Rota | Descrição |
|---|---|---|
| GET | `/categories` | Listagem de categorias |
| POST | `/categories` | Cadastro de categoria |

### Produtos

| Método | Rota | Descrição |
|---|---|---|
| GET | `/products` | Listagem de produtos |
| POST | `/products` | Cadastro de produto |
| PUT | `/products/:id` | Atualização de produto |
| DELETE | `/products/:id` | Remoção de produto |

### Pedidos

| Método | Rota | Descrição |
|---|---|---|
| GET | `/orders` | Consulta de pedidos |
| PUT | `/orders/:id` | Atualização de pedido |

**Observação:** as rotas administrativas e de gerenciamento podem exigir autenticação e permissões específicas.

## 💳 Integração com Stripe

A API utiliza o **Stripe Payment Intents** para iniciar o processamento de pagamentos em reais (BRL).

### Fluxo implementado

1. O frontend envia os produtos para a API.
2. A API calcula o valor informado e cria um Payment Intent.
3. A API retorna o `clientSecret` para o frontend continuar o fluxo de pagamento.

### Endpoint

```http
POST /create-payment-intent
```

O endpoint recebe uma lista de produtos contendo `id`, `quantity` e `price`, e retorna o `clientSecret` gerado pela Stripe.


## 👨‍💻 Autor

**Yago Oliveira**

Desenvolvedor Full Stack em formação, com foco em JavaScript, React.js, Node.js e desenvolvimento de APIs REST.

- [GitHub](https://github.com/YagoAlves92)
- [LinkedIn](https://www.linkedin.com/in/yagoalves/)
