import log4js from 'log4js';
import stocks from '../../stocks';
import { EventEmitter } from '../event-emitter';
import { TASK_MANAGER } from '../event-emitter/channels';

export class TaskManager {

  constructor() {
    this.interval = 5000;
    this.list = [];
    this.logger = log4js.getLogger('task-manager');
  }

  listener(event) {
    this.list.push(event);
  }

  next() {
    let event = this.list.shift();
    if (event) {
      this.logger.info('event start:', event.channel);
      EventEmitter.emit(event.channel, event.data);
    } else {
      setTimeout(() => {
        this.logger.debug('there is not tasks to run');
        this.next();
      }, this.interval);
    }
  }
}
