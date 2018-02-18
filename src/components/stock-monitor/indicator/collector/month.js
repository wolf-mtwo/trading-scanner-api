import moment from 'moment';
import { Indicator } from '../indicator';
import { RSI } from '../rsi';

export class IndicatorMonthCollector extends Indicator {

  constructor(symbol, db) {
    super(symbol, db);
    this.sync_days = 5;
  }

  async generator() {
    let dates = this.collectionDays();
    dates.map((date) => {
      let rsi = new RSI(this.symbol, this.db, date);
      rsi.generator();
    });
  }

  collectionDays() {
    let result = [];
    for (var i = 1; i <= this.sync_days; i++) {
      result.push(moment().subtract(i, 'days').format('YYYYMMDD'));
    }
    return result;
  }
}
