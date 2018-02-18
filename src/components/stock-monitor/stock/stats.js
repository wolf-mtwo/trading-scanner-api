import request from 'superagent';
import { Stock } from './stock';

export class Stats extends Stock {

  async retrieve() {
    try {
      let { body } = await this.findBySymbol(this.symbol);
      this.save(body);
      console.log(body);
    } catch (err) {
      console.log(err.stack);
    }
  }

  async save(item) {
    const col = this.db.collection('stats');
    await col.insert(item);
  }

  findBySymbol(symbol) {
    return request
    .get(`https://api.iextrading.com/1.0/stock/${symbol}/stats`)
    .timeout({response: 30000})
    .send();
  }
}
