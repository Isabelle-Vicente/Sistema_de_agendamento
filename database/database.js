const Sequelize = require('sequelize');

const connection = new Sequelize('agendameto','root','3103',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;