import config from './config';
import log4js from 'log4js';
import { MongoClient } from 'mongodb';

let logger = log4js.getLogger('database');

let db = null;

export class MongoDB {

  static start() {
    return new Promise((resolve, reject) => {
      MongoClient.connect(config.db, function(err, client) {
        if (err) reject(err);
        db = client.db(config.name);
        resolve();
      });
    });
  }

  static get() {
    if (!db) {
      throw new Error('Trere is no a database connection');
    }
    return db;
  }
}
