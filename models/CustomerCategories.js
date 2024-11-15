const DataTypes = require('sequelize');
const serialize = require('../config/config');

const customerCategories = serialize.define('customer_categories',
{
    name:{
        type:DataTypes.STRING
    },
    description:{
        type:DataTypes.TEXT
    }
});

customerCategories.sync();
module.exports = customerCategories;