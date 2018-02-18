import request from 'superagent';
import { Stock } from './stock';

export class Stats extends Stock {

  async retrieve() {
    try {
      let data = await this.logLoad(this.getDate());
      if (!data) {
        let { body } = await this.findBySymbol(this.symbol);
        this.save(body);
        this.logger.info('stats', this.symbol, this.getDate(), 'finished!!');
        this.logSave();
      } else {
        this.logger.debug('stats', this.symbol, this.getDate(), 'stored!');
      }
    } catch (err) {
      console.log(err.stack);
    }
  }

  async logLoad(item) {
    const col = this.db.collection('log');
    return await col.findOne({stats : item});
  }

  async logSave() {
    const col = this.db.collection('log');
    return await col.insert({stats : this.getDate()});
  }

  async save(item) {
    const col = this.db.collection('stats');
    await col.insert(item);
  }

  findBySymbol(symbol) {
    this.logger.debug('population', this.symbol, this.getDate(), 'loading!!');
    return request
    .get(`https://api.iextrading.com/1.0/stock/${symbol}/stats`)
    .timeout({response: 30000})
    .send();
  }
}
