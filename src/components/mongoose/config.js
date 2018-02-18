let env = process.env.ENV || 'develop';

let config = {
  develop: {
    db: 'mongodb://127.0.0.1/wargos-attendance-develop'
  },
  test: {
    db: 'mongodb://127.0.0.1/wargos-attendance-test'
  },
  production: {
    db: 'mongodb://127.0.0.1/wargos-attendance'
  }
};

module.exports = config[env];
