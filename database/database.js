const Sequelize = require('sequelize');

const connection = new Sequelize('Guiapress', 'root', 'root', {
    host : 'localhost',
    dialect : 'mysql'
});

module.exports = connection;

