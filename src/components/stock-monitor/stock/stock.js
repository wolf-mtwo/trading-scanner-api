export class Stock {

  constructor(symbol, db) {
    this.symbol = symbol;
    this.db = db;
  }

  retrieve() {
    throw new Error('method is not implemented');
  }
}
