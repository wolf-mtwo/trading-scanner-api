import log4js from 'log4js';
import moment from 'moment';

export class Stock {

  constructor(symbol, db) {
    this.symbol = symbol;
    this.db = db;
    this.logger = log4js.getLogger('stock');
  }

  retrieve() {
    throw new Error('method is not implemented');
  }

  getDate() {
    return moment().format('YYYYMMDD')
  }
}
