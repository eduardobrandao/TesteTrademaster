const amqp = require("amqplib");
const { consumeMessages } = require("./consumers/eventConsumer");
const { processBatch } = require("./services/batchProcessor");
const { logger } = require("./utils/logger");

(async () => {
  try {
    const connection = await amqp.connect("amqp://rabbitmq:5672");
    const channel = await connection.createChannel();
    const queue = "ecommerce_events";

    await channel.assertQueue(queue, { durable: true });
    logger.info("Conectado ao RabbitMQ e fila criada.");

    await consumeMessages(channel, queue);

    setInterval(async () => {
      await processBatch();
    }, 10000);
  } catch (error) {
    logger.error("Erro ao iniciar a aplicação:", error);
  }
})();