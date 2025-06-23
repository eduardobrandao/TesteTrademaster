const { consumeMessages } = require("../../src/consumers/eventConsumer");
const { retryHandler } = require("../../src/patterns/retryHandler");
const { processEvent } = require("../../src/services/eventProcessor");

jest.mock("../../src/patterns/retryHandler", () => ({
    retryHandler: jest.fn(),
}));

describe("Event Consumer", () => {
    const fakeChannel = {
        consume: jest.fn((_, cb) => {
            cb({ content: Buffer.from(JSON.stringify({ type: "ORDER_CREATED", data: { orderId: 1 } })) });
        }),
        ack: jest.fn(),
        nack: jest.fn(),
    };

    it("deve consumir e processar mensagens com sucesso", async () => {
        retryHandler.mockImplementation(async (fn) => await fn());
        jest.spyOn(require("../../src/services/eventProcessor"), "processEvent").mockResolvedValueOnce();
        await consumeMessages(fakeChannel, "ecommerce_events");
        expect(fakeChannel.ack).toHaveBeenCalled();
    });

    it("deve capturar erro e chamar nack", async () => {
        retryHandler.mockImplementation(async () => { throw new Error("falha") });
        await consumeMessages(fakeChannel, "ecommerce_events");
        expect(fakeChannel.nack).toHaveBeenCalled();
    });
});
