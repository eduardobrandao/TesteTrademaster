const { EventHandlerFactory } = require("../../src/patterns/factory");

describe("Factory Pattern", () => {
    it("deve retornar handler de pedido", async () => {
        const handler = EventHandlerFactory.createHandler("ORDER_CREATED");
        const res = await handler.handle({ data: { orderId: 1 } });
        expect(res).toBe("Factory: Pedido 1 criado.");
    });

    it("deve retornar handler de pagamento", async () => {
        const handler = EventHandlerFactory.createHandler("PAYMENT_RECEIVED");
        const res = await handler.handle({ data: { paymentId: 5 } });
        expect(res).toBe("Factory: Pagamento 5 recebido.");
    });

    it("deve lançar erro para tipo desconhecido", () => {
        expect(() => {
            EventHandlerFactory.createHandler("DESCONHECIDO");
        }).toThrow("Tipo de evento desconhecido: DESCONHECIDO");
    });
});