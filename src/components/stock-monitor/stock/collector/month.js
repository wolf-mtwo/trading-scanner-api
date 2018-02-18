import log4js from 'log4js';
import moment from 'moment';
import { Stock } from '../stock';
import { Day } from '../day';

let logger = log4js.getLogger('database');

export class MonthCollector extends Stock {

  constructor(symbol, db) {
    super(symbol, db);
    this.sync_days = 5;
  }

  async retrieve() {
    let dates = this.collectionDays();
    dates.map((date) => {
      let day = new Day(this.symbol, this.db, date);
      day.retrieve();
    })
  }

  collectionDays() {
    let result = [];
    for (var i = 1; i <= this.sync_days; i++) {
      result.push(moment().subtract(i, 'days').format('YYYYMMDD'));
    }
    return result;
  }
}
