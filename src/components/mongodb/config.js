let env = process.env.ENV || 'develop';

let config = {
  develop: {
    db: 'mongodb://127.0.0.1:27017',
    name: 'wargos-stock-monitor-develop'
  },
  test: {
    db: 'mongodb://127.0.0.1:27017',
    name: 'wargos-stock-monitor-test'
  },
  production: {
    db: 'mongodb://127.0.0.1:27017',
    name: 'wargos-stock-monitor'
  }
};

module.exports = config[env];
