const prod = require('./env/prod.json')
const stg = require('./env/stg.json')

module.exports = {
  env: process.NODE_ENV === 'production' ? prod : stg
}
