import { Emitter }  from './emitter';
import { TASK_MANAGER, NEXT } from './channels';

let emitter = new Emitter();

export class EventEmitter {

  static emit(channel, data) {
    if (!channel) {
      throw new Error('channel is undefined');
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

  static next(data) {
    emitter.on(TASK_MANAGER, data);
    emitter.on(NEXT);
  }
}
