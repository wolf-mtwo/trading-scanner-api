import alphavantage from 'alphavantage';
// import stocks from '../../stocks';
import { EventEmitter } from '../event-emitter';
import { NEXT } from '../event-emitter/channels';
const alpha = alphavantage({ key: '5JB3P6WCPE4JEVDD' });

export class Alpha {

  constructor() {
  }

  listener(event) {
    // EventEmitter.emit(NEXT);
    console.log(event);
    alpha.data.intraday(`msft`).then(data => {
      console.log(data);
      EventEmitter.emit(NEXT);
    })
    .catch((err) => {
      EventEmitter.emit(NEXT, event);
      console.log(err);
    });
  }
}
