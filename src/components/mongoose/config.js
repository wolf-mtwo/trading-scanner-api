let env = process.env.ENV || 'develop';

let config = {
  develop: {
    db: 'mongodb://127.0.0.1/trading-monitor-develop'
  },
  test: {
    db: 'mongodb://127.0.0.1/trading-monitor-test'
  },
  production: {
    db: 'mongodb://127.0.0.1/trading-monitor'
  }
};

module.exports = config[env];
