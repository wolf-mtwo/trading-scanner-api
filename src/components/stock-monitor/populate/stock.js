import log4js from 'log4js';
import moment from 'moment';
import { Stats } from '../stock/stats';
import { MonthCollector } from '../stock/collector/month';
import { MongoDB } from '../../mongodb/mongodb';

let logger = log4js.getLogger('database');

export class Stock {

  constructor(symbol) {
    this.symbol = symbol;
    this.mongo = new MongoDB(symbol);
  }

  async start() {
    await this.mongo.connect();
  }

  async populate() {
    let stats = new Stats(this.symbol, this.mongo.db);
    stats.retrieve();
    let nonthCollector = new MonthCollector(this.symbol, this.mongo.db);
    nonthCollector.retrieve();
  }
}
