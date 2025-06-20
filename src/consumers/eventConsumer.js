const { processEvent } = require("../services/eventProcessor");
const { retryHandler } = require("../patterns/retryHandler");
const { logger } = require("../utils/logger");
const { addToBatch } = require("../services/batchProcessor");

const consumeMessages = async (channel, queue) => {
  channel.consume(queue, async (msg) => {
    if (msg !== null) {
      try {
        const event = JSON.parse(msg.content.toString());
        await retryHandler(() => processEvent(event), 3);
        addToBatch(event);
        channel.ack(msg);
      } catch (error) {
        logger.error("Erro no processamento da mensagem:", error);
        channel.nack(msg, false, false);
      }
    }
  }, { noAck: false });
};

module.exports = { consumeMessages };