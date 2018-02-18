import EventEmitter from 'events';

export class Emitter extends EventEmitter {

}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');
