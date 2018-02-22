import 'babel-polyfill';
import request from 'superagent';
import stock from '../../../stocks';
import { MongoDB } from '../../mongodb';

export class Populate {

  constructor() {
  }

  // TODO implement events to download data
  // async start() {
  //   var data = await this.findBySymbol('aapl');
  //   console.log(data.body);
  // }

  start() {
    return this.findOpportunities();
  }

  findOpportunities() {
    return Promise.all(stock.map((item) => {
      return this.findBySymbol(item)
      .then((data) => {
        return data.body;
      })
      .catch((err) => {
          console.log(err.message);
      });
    }))
    .then((items) => {
      return items.map((item) => {
        return this.saveData(item);
      })
    })
    .then(() => {
      console.log('after save');
    })
    // .then((items) => {
    //   return _.sortBy(items, ['rsi']);
    // });
  }

  async saveData(item) {
    let db = MongoDB.get();
    const col = db.collection(item.symbol);
    let r = await col.insert(item);
    return null;
  }

  findBySymbol(symbol) {
    console.log(`https://api.iextrading.com/1.0/stock/${symbol}/stats`);
    return request
    .get(`https://api.iextrading.com/1.0/stock/${symbol}/stats`)
    .timeout({response: 30000})
    .send();
  }
}
