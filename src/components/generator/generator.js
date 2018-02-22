import stocks from '../../stocks';
import { EventEmitter } from '../event-emitter';
import { TASK_MANAGER, STOCK } from '../event-emitter/channels';

export class Generator {

  constructor() {
  }

  listener() {
    stocks.map((symbol) => {
      EventEmitter.emit(TASK_MANAGER, {
        channel: STOCK.PRICE,
        data: { symbol }
      });
    });
  }
}
