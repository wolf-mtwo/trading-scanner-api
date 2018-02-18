import log4js from 'log4js';
import moment from 'moment';

export class Indicator {

  constructor(symbol, db) {
    this.symbol = symbol;
    this.db = db;
    this.logger = log4js.getLogger('indicator');
  }

  generate() {
    throw new Error('method is not implemented');
  }

  getDate() {
    return moment().format('YYYYMMDD')
  }
}
