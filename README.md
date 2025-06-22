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

## Acesse a pasta do projeto no terminal/cmd

### $ cd <sua pasta>/TesteTrademaster/ecommerce-event-processor

#### Executando o projeto via Docker

$ Para subir a imagem Docker rode o comando

$ docker-compose up --build

OBS.: Com esse comando irão subir as instancias pre-definidas (APP, REBBITMQ e o POSTGRES) no arquivo Dockerfile

OBS2.: Às vezes uma das 3 instancias fica sem iniciar (conferir as instancias no Docker Desktop)

#### Executando teste na aplicação

$ Para testar sua aplicação (ainda usando a imagem Docker) rode o seguinte o comando:

docker exec -it ecommerce-event-processor-app-1 node sendMessage.js (esse comando executará o script de teste que estar na raiz do projeto)

#### Rodando o Projeto

Local

#### Executando teste(local) na aplicação

$ Para testar sua aplicação (agora localmente) rode os seguintes o comandos:

$ npm install (para instalar as dependencias do projeto localmente)

---

#### Para visualizar as chamadas ao RabbitMQ acesse esse link com as segintes credencias:

$ http://localhost:15672/#/users

$ Credencias: User: guest

$ Credencias: password: guest

