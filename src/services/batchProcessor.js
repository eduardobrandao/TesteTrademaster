const { logger } = require("../utils/logger");
let batch = [];

const addToBatch = (event) => {
  batch.push(event);
};

const processBatch = async () => {
  if (batch.length === 0) return;

  logger.info(`Processando lote de ${batch.length} eventos.`);
  try {
    for (const event of batch) {
      logger.info("Processando em lote:", event);
    }
  } catch (error) {
    logger.error("Erro no processamento em lote:", error);
  } finally {
    batch = [];
  }
};

module.exports = { addToBatch, processBatch };