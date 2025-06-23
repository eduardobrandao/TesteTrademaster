const { StrategyContext } = require("../patterns/strategy");
const { EventHandlerFactory } = require("../patterns/factory");
const { logger } = require("../utils/logger");
const { eventBus } = require("../patterns/eventBus");

const processEvent = async (event) => {
  const handler = EventHandlerFactory.createHandler(event.type);
  const factoryResult = await handler.handle(event);
  logger.info("Resultado via Factory:", factoryResult);

  const strategyContext = new StrategyContext();
  const strategyResult = await strategyContext.execute(event);
  logger.info("Resultado via Strategy:", strategyResult);

  // Dispara evento interno usando Observer/EventEmitter
  eventBus.emit("eventProcessed", event);
};

module.exports = { processEvent };