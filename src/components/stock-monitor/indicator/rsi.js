import { Indicator } from './indicator';

export class RSI extends Indicator {

  constructor(symbol, db, date) {
    super(symbol, db);
    this.date = date;
  }

  async generator() {
    try {
      let data = await this.logLoad(this.date);
      if (!data) {
        let data = await this.load();
        let result = this.calculateRSI(data, 14);
        this.save(result);
        this.logger.info('rsi minute', this.symbol, this.date, 'finished!!');
        this.logSave();
      } else {
        this.logger.debug('rsi minute', this.symbol, this.date, 'stored!');
      }
    } catch (err) {
      this.logger.error(err);
    }
  }

  async load() {
    const col = this.db.collection('minutes');
    return await col.find({date: this.date}).toArray();
  }

  async logLoad(item) {
    const col = this.db.collection('log');
    return await col.findOne({rsiMin : item});
  }

  async logSave() {
    const col = this.db.collection('log');
    return await col.insert({rsiMin : this.date});
  }

  async save(item) {
    const col = this.db.collection('rsi-minutes');
    await col.insert(item);
  }

  calculateRSI(data, session) {
    let result = [];
    let variation = [];
    for (var i = 1; i < data.length; i++) {
      variation.push({
        average: data[i].average - data[i - 1].average,
        data: data[i]
      })
    }
    variation.reduce((sessions, item) => {
        if (sessions.length >= session) {
          sessions.shift();
        }
        sessions.push(item.average);
        if (sessions.length === session) {
          result.push({
            rsi: this.rsi(sessions),
            average: item.data.average,
            date: item.data.date,
            minute: item.data.minute
          });
        }
        return sessions;
    }, []);
    return result;
  }

  /**
   * Ej: http://aprenderbolsa.com/el-rsi-1%C2%AA-parte/
   */
  rsi(items) {
    if (!items) {
      throw new Error('items is undefined');
    }
    var reduceFuc = (total, num) => {
      return total + num;
    };
    let positive = items.filter((item) => {
      return item > 0;
    });
    let positiveResult = (positive.reduce(reduceFuc, 0) / positive.length);
    let negative = items.filter((item) => {
      return item < 0;
    });
    let negativeResult = (negative.reduce(reduceFuc, 0) / negative.length);
    return 100 - (100 / (1 + (positiveResult / Math.abs(negativeResult))));
  }
}
