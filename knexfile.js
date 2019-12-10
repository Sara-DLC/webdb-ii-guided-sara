// Update with your config settings.

module.exports = {
//teaches knex to connect to the development database

//Each key on the exported object has the configuration for a database environment. (dev, testing(staging), production, etc)

//The knex CLI will use the configuration on this to file to find the DB.

//The knex CLI will use the 'development' environment by default, but we can override that behavior.


  development: {
    client: 'sqlite3', //DB driver
    useNullAsDefault: true,//only needed when using SQlite3
    connection: {
      filename: './data/produce.db3'//where is the database file? This would be the path to that file
    },
    migrations: {
      directory: './data/migrations'//will be created automatically
    },

    seeds: {
      directory: './data/seeds'
    }

  }

  /** THESE ARE NOT NEEDED FOR THIS PROJECT */
//how to connect to the staging environment (basically how we test our code)
//   staging: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   },

//   production: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   }

};
