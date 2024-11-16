const DataTypes = require('sequelize');
const sequelize = require('../config/config');

const authorized_person = sequelize.define('authorized_person',{

    customer_id:{
        type:DataTypes.INTEGER,
    },
    fullname:{
        type:DataTypes.STRING
    },
    phone_number:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    note:{
        type:DataTypes.TEXT
    }
});

authorized_person.sync();
module.exports = authorized_person;