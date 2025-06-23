const { StrategyContext } = require("../../src/patterns/strategy");

describe("Strategy Pattern", () => {
    const context = new StrategyContext();

    it("deve processar ORDER_CREATED", async () => {
        const result = await context.execute({ type: "ORDER_CREATED", data: { orderId: 10 } });
        expect(result).toBe("Pedido 10 criado.");
    });

    it("deve processar PAYMENT_RECEIVED", async () => {
        const result = await context.execute({ type: "PAYMENT_RECEIVED", data: { paymentId: 33 } });
        expect(result).toBe("Pagamento 33 recebido.");
    });

    it("deve lançar erro para tipo inválido", async () => {
        await expect(() => context.execute({ type: "INVALIDO" })).rejects.toThrow("Tipo de evento não suportado");
    });
});