const EventEmitter = require("events");

class EventBus extends EventEmitter { }

const eventBus = new EventBus();

// Exemplo de um ouvinte global para logging ou auditoria
eventBus.on("eventProcessed", (event) => {
    console.log("[Observer] Evento processado e observado:", event);
});

module.exports = { eventBus };