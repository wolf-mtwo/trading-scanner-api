import log4js from 'log4js';
import { System } from './components/system';
import { MongoDB } from './components/mongodb';
import { Mongoose } from './components/mongoose';
import { Socket } from './components/socket';
import { Stock } from './components/stock';
import { StockMonitor } from './components/stock-monitor';

let system = new System();
let logger = log4js.getLogger('server');

(async function() {
  try {
    let stockMonitor = new StockMonitor();
    await stockMonitor.start();
    await stockMonitor.populate();
  } catch (err) {
    console.log(err.stack);
  }
})();

Mongoose.start()
.then(() => {
  logger.info('mongo models were loaded');
  return Mongoose.loadModels(__dirname);
})
.then(() => {
  logger.info('system models were loaded');
  return system.loadModules(__dirname);
})
.then(() => {
  logger.info('modules were loaded');
//   return Stock.populate();
// })
// .then(() => {
  return system.start();
})
.then((server) => {
  Socket.init(server);
  logger.info('server started at port: ' + system.port);
})
.catch((err) => {
  logger.error(err);
});
