class OrderHandler {
    async handle(event) {
        return `Factory: Pedido ${event.data.orderId} criado.`;
    }
}

class PaymentHandler {
    async handle(event) {
        return `Factory: Pagamento ${event.data.paymentId} recebido.`;
    }
}

class EventHandlerFactory {
    static createHandler(type) {
        switch (type) {
            case "ORDER_CREATED":
                return new OrderHandler();
            case "PAYMENT_RECEIVED":
                return new PaymentHandler();
            default:
                throw new Error(`Tipo de evento desconhecido: ${type}`);
        }
    }
}

module.exports = { EventHandlerFactory };
