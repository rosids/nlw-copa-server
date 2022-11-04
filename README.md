# Servidor do NLW Copa

Foi desenvolvido com Fastify v.4.9.2, Prisma v.4.5.0 e SQLite

## Setup

#### 1. Clonar projeto

```bash
  git clone https://github.com/rosids/nlw-copa-server.git
  cd nlw-copa-server
```

#### 2. Instalar dependências

```bash
 npm install
```

#### 3. Adicionar variáveis de ambiente

Exemplo das variáveis no arquivo .env-example

#### 4. Executar as migrations

```bash
  npx prisma migrate dev
```

#### 5. Executar servidor

```bash
  npm run dev
```