const knex = require('knex');
const configuration = require('../../knexfile');

//enviroment variable for use in test db
const EnvType = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development; 

const conn = knex(EnvType);

module.exports = conn;