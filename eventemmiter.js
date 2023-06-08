const EventEmitter = require("events");
const emitter = new EventEmitter();



// Raise an event
emitter.emit('messageLogged')
