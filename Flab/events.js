const EventEmitter = require('events');
const events = new EventEmitter();

// Define a listener
events.on('userRegistered', (user) => {
    console.log(`Welcome email sent to ${user.email}`);
});

// Somewhere in your signup logic
function registerUser(user) {
    console.log(`User ${user.name} registered.`);
    events.emit('userRegistered', user);
}

// Triggering
registerUser({ name: "Murali", email: "murali@example.com" });
