const { processEvent } = require("../../src/services/eventProcessor");
const { eventBus } = require("../../src/patterns/eventBus");

describe("Event Processor", () => {
    it("deve processar evento ORDER_CREATED com sucesso", async () => {
        const spy = jest.spyOn(eventBus, "emit");
        await processEvent({ type: "ORDER_CREATED", data: { orderId: 90 } });
        expect(spy).toHaveBeenCalledWith("eventProcessed", expect.any(Object));
    });
});