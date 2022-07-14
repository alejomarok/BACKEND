const knex = require('knew')
const config = {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: '',
      database: 'ejemplo'
    },
    pool: { min: 0, max: 7 }
  }

  const database = knex(config) 

module.exports = database