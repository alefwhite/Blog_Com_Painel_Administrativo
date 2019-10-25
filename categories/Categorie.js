const Sequelize = require('sequelize');
const connection = require('../database/database');

const Category = connection.define('categorires', {
    title : {
        type : Sequelize.STRING,
        allowNull : false
    },slug: {
        type : Sequelize.STRING,
        allowNull : false
    }
});

module.exports = Category;