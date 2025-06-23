const amqp = require("amqplib");
const { eventBus } = require("./src/patterns/eventBus");


eventBus.on("eventProcessed", (event) => {
  console.log("🔔 Evento processado via Observer (eventBus):", event);
});

(async () => {
  const conn = await amqp.connect("amqp://rabbitmq:5672");
  const channel = await conn.createChannel();
  const queue = "ecommerce_events";

  await channel.assertQueue(queue, { durable: true });

  const orderMessage = {
    type: "ORDER_CREATED",
    data: { orderId: Math.floor(Math.random() * 1000) },
  };

  const paymentMessage = {
    type: "PAYMENT_RECEIVED",
    data: { paymentId: Math.floor(Math.random() * 1000) },
  };

  channel.sendToQueue(queue, Buffer.from(JSON.stringify(orderMessage)));
  channel.sendToQueue(queue, Buffer.from(JSON.stringify(paymentMessage)));

  console.log("📨 Mensagens enviadas para o RabbitMQ!");

  await channel.close();
  await conn.close();
})();
