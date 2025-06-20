const { logger } = require("../utils/logger");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const retryHandler = async (fn, retries = 3, backoff = 1000) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (err) {
      logger.warn(`Tentativa ${i + 1} falhou. Retentando...`);
      await delay(backoff * (i + 1));
    }
  }
  throw new Error("Todas as tentativas falharam.");
};

module.exports = { retryHandler };