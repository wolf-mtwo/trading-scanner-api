import request from 'superagent';
import { Stock } from './stock';

export class Day extends Stock {

  constructor(symbol, db, date) {
    super(symbol, db);
    this.date = date;
  }

  async retrieve() {
    try {
      let data = await this.logLoad(this.date);
      if (!data) {
        let { body } = await this.findBySymbol(this.symbol, this.date);
        this.save(body);
        this.logger.info('population', this.symbol, this.date, 'finished!!');
        this.logSave();
      } else {
        this.logger.debug('population', this.symbol, this.date, 'stored!');
      }
    } catch (err) {
      console.log(err.stack);
    }
  }

  async logLoad(item) {
    const col = this.db.collection('log');
    return await col.findOne({day : item});
  }

  async logSave() {
    const col = this.db.collection('log');
    return await col.insert({day : this.date});
  }

  async save(item) {
    const col = this.db.collection('minutes');
    await col.insert(item);
  }

  findBySymbol(symbol, date) {
    this.logger.debug('population', this.symbol, this.date, 'loading!!');
    return request
    .get(`https://api.iextrading.com/1.0/stock/${symbol}/chart/date/${date}`)
    .timeout({response: 30000})
    .send();
  }
}
