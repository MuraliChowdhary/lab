const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('sayHello', () => {
    console.log('Hello Event Triggered!');
});

emitter.emit('sayHello');
