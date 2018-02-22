import log4js from 'log4js';
import moment from 'moment';
import { Stats } from '../stock/stats';
import { PopulateMonthCollector } from '../stock/collector/month';
import { IndicatorMonthCollector } from '../indicator/collector/month';
import { RSI } from '../indicator/rsi';
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
    // let stats = new Stats(this.symbol, this.mongo.db);
    // stats.retrieve();
    // let monthCollector = new PopulateMonthCollector(this.symbol, this.mongo.db);
    // monthCollector.retrieve();
  }

  async generator() {
    // let monthCollector = new IndicatorMonthCollector(this.symbol, this.mongo.db);
    // monthCollector.generator();
    // console.log('generator');
  }
}
