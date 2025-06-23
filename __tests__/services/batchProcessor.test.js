const { addToBatch, processBatch } = require("../../src/services/batchProcessor");

describe("Batch Processor", () => {
    it("deve adicionar e processar eventos em lote", async () => {
        addToBatch({ type: "ORDER_CREATED", data: { orderId: 1 } });
        addToBatch({ type: "ORDER_CREATED", data: { orderId: 2 } });

        await processBatch();
    });

    it("deve não fazer nada se o lote estiver vazio", async () => {
        await processBatch();
    });
});