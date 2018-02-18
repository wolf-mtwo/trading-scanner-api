import stocks from '../../stocks';
import { Stock } from './populate/stock';

export class StockMonitor {

  constructor() {
    this.stocks = [];
    stocks.map((symbol) => {
      this.stocks.push(new Stock(symbol));
    });
  }

  async start() {
    await Promise.all(this.stocks.map((stock) => {
      return stock.start();
    }));
  }

  async populate() {
    await Promise.all(this.stocks.map((stock) => {
      return stock.populate();
    }));
  }
}
