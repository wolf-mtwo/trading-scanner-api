import Emitter from './emitter';

let emitter = new Emitter();

export class EventEmitter {

  static emit(channel, data) {
    if (!channel) {
      throw new Error('channel is undefined');
    }
    if (!data) {
      throw new Error('data is undefined');
    }
    emitter.emit(channel, data);
  }

  static on(channel, callback) {
    if (!channel) {
      throw new Error('channel is undefined');
    }
    if (!callback) {
      throw new Error('callback is undefined');
    }
    emitter.on(channel, callback);
  }
}
