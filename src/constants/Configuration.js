const _ = require('ramda')

const defaultConfig = {
}

const createConfig = config => _.merge(defaultConfig, config)

const configuration = {
  development: createConfig({
    endpoint: 'http://localhost:3000',
    apiEndpoint: 'http://localhost:3000/api',
  }),
  production: createConfig({
  }),
}

module.exports = configuration[process.env.NODE_ENV || 'development']
