import { Generator } from '../generator';
import { EventEmitter } from '../event-emitter';
import { TaskManager } from '../task-manager';
import { Alpha } from '../alphavantage';
import {
  TASK_MANAGER,
  START_GENERATOR,
  STOCK,
  NEXT
} from '../event-emitter/channels';

export class Monitor {

  constructor() {
    this.alpha = new Alpha();
    this.generator = new Generator();
    this.taskManager = new TaskManager();
  }

  start() {
    EventEmitter.on(START_GENERATOR, ((event) => this.generator.listener(event)));
    EventEmitter.on(TASK_MANAGER, ((event) => this.taskManager.listener(event)));
    EventEmitter.on(STOCK.PRICE, ((event) => this.alpha.listener(event)));
    EventEmitter.on(NEXT, ((event) => this.taskManager.next(event)));
    EventEmitter.emit(START_GENERATOR, true);
    EventEmitter.emit(NEXT, true);
  }
}
