class StrategyContext {
  async execute(event) {
    switch (event.type) {
      case "ORDER_CREATED":
        return this.handleOrderCreated(event);
      case "PAYMENT_RECEIVED":
        return this.handlePayment(event);
      default:
        throw new Error("Tipo de evento não suportado");
    }
  }

  async handleOrderCreated(event) {
    return `Pedido ${event.data.orderId} criado.`;
  }

  async handlePayment(event) {
    return `Pagamento ${event.data.paymentId} recebido.`;
  }
}

module.exports = { StrategyContext };