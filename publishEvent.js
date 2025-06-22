const amqp = require("amqplib");

(async () => {
  const conn = await amqp.connect("amqp://localhost:5672"); // ou "amqp://rabbitmq:5672" se estiver rodando dentro do container
  const channel = await conn.createChannel();
  const queue = "ecommerce_events";

  await channel.assertQueue(queue, { durable: true });

  const message = {
    type: "ORDER_CREATED", // ou "PAYMENT_RECEIVED"
    data: { orderId: Math.floor(Math.random() * 1000) }
  };

  channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
  console.log("Mensagem enviada com sucesso!");

  await channel.close();
  await conn.close();
})();
