const { eventBus } = require("../../src/patterns/eventBus");

describe("EventBus Observer", () => {
    it("deve emitir e escutar evento processado", (done) => {
        const fakeEvent = { type: "ORDER_CREATED", data: { orderId: 77 } };

        eventBus.once("eventProcessed", (event) => {
            expect(event).toEqual(fakeEvent);
            done();
        });

        eventBus.emit("eventProcessed", fakeEvent);
    });
});