const DataTypes = require('sequelize');
const sequelize = require('../config/config');

const customer = sequelize.define('customer',{

    customer_type_id:{
        type:DataTypes.INTEGER,
    },
    company_name:{
        type:DataTypes.STRING
    },
    fullname:{
        type:DataTypes.STRING
    },
    short_name:{
        type:DataTypes.STRING
    },
    customer_category_id:{
        type:DataTypes.INTEGER
    },
    email:{
        type:DataTypes.STRING
    },
    phone:{
        type:DataTypes.STRING
    },
    fax_number:{
        type:DataTypes.STRING
    },
    iban_number:{
        type:DataTypes.STRING
    },
    postal_code:{
        type:DataTypes.STRING
    },
    address:{
        type:DataTypes.TEXT
    },
    city_id:{
        type:DataTypes.INTEGER
    },
    district_id:{
        type:DataTypes.INTEGER
    },
    vkn_tckn:{
        type:DataTypes.STRING
    },
    tax_office:{
        type:DataTypes.STRING
    },
    exchange_rate_id:{
        type:DataTypes.INTEGER
    },
    opening_balance_id:{
        type:DataTypes.INTEGER
    }

});

customer.sync();
module.exports = customer;