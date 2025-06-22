## README

<P align="center"> Teste Trademaster </p>

# 🛒 Ecommerce Event Processor

Este projeto simula uma plataforma de e-commerce que consome eventos de forma assíncrona via RabbitMQ, processando-os tanto em tempo real quanto em lote, utilizando boas práticas como Design Patterns e arquitetura desacoplada.

## 📦 Tecnologias Utilizadas

- **Node.js** (runtime principal)
- **RabbitMQ** (mensageria assíncrona)
- **PostgreSQL** (persistência de dados)
- **Prisma ORM** (acesso ao banco)
- **Docker + Docker Compose** (infraestrutura local)
- **Pino** (logging)
- **amqplib** (conexão com RabbitMQ)
- **Design Patterns**: 
  - Strategy
  - Retry
  - Factory
  - Observer/EventEmitter (EventBus interno)

---

## 📚 Funcionalidades

- Processamento de eventos em tempo real recebidos via RabbitMQ
- Processamento em lote a cada 10 segundos
- Logs completos de operação
- Retry automático com backoff exponencial
- Dead Letter Queue (mensagens que falham após tentativas)
- Uso de múltiplos design patterns para separação de responsabilidade
- Dockerização completa com PostgreSQL e RabbitMQ
- Envio de eventos para testes via script local


## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua maquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/).
Além disso é bom ter um editor para trabalhar com codigo como [VSCode](https://code.visualstudio.com/)

#### Rodando o Projeto

Docker

---

#### Clone do repositorio

$ git clone <https://github.com/eduardobrandao/TesteTrademaster.git>

# Acesse a pasta do projeto no terminal/cmd

## $ cd projeto

#### Executando o projeto via Docker

$ Para subir a imagem Docker rode o comando

$ Docker-compose up --build

OBS.: Com esse comando subirar as instancias pre-definidas (APP, REBBITMQ e o POSTGRES) no arquivo Dockerfile

OBS2.: Às vezes uma das 3 instancias fica sem iniciar (conferir as instancias no Docker Desktop)

$ npm install

---

#### Para execute a aplicação em modo de desenvolvimento, roda o seguinte comando 

$ npm run dev

#### O servidor iniciará na porta: 3333 - acesse <http://localhost:3333>
