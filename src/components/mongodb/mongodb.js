import log4js from 'log4js';
import config from './config';
import { MongoClient } from 'mongodb';

let logger = log4js.getLogger('database');

export class MongoDB {

  constructor(name) {
    this._db = null;
    this.name = name;
  }

  async connect() {
    try {
      let client = await MongoClient.connect(config.db);
      this._db = client.db(this.name);
      logger.info('database connection:', this.name);
    } catch (err) {
      console.log(err.stack);
    }
  }

  get db() {
    if (!this._db) {
      throw new Error('there is no database connection');
    }
    return this._db;
  }

  set db(item) {
    this._db = item;
  }

  disconnect() {
    // TODO implement a Logic to disconect the connections
  }
}
