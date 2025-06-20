const { logger } = require("../utils/logger");
const { EventHandlerFactory } = require("../patterns/factory");
const { StrategyContext } = require("../patterns/strategy");

const processEvent = async (event) => {
  try {
    // 🔧 Usando Factory Pattern para obter o handler
    const handler = EventHandlerFactory.createHandler(event.type);
    const factoryResult = await handler.handle(event);
    logger.info("Resultado via Factory:", factoryResult);

    // 🔁 Também processa via Strategy Pattern (caso queira manter os dois)
    const strategyContext = new StrategyContext();
    const strategyResult = await strategyContext.execute(event);
    logger.info("Resultado via Strategy:", strategyResult);

  } catch (error) {
    logger.error("Erro no processador de evento:", error);
    throw error;
  }
};

module.exports = { processEvent };
