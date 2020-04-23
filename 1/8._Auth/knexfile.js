// Update with your config settings.

const credentials = require("./config/mysqlCredentials.js")

console.log(credentials)

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: credentials.database,
      user: credentials.user,
      password: credentials.password,

    }
  },

};
