import EventEmitter from 'events';

const event = new EventEmitter();

event.on("my", (data) => {
  console.log("my event triggered", data);
});

event.emit("my", { name: "John" });
