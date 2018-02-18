import log4js from 'log4js';
import { Stats } from '../stock/stats';
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
    console.log('populate');
    let stats = new Stats(this.symbol, this.mongo.db);
    stats.retrieve();
  }
}
