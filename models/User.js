const DataTypes = require('sequelize');
const sequelize = require('../config/config');

const user = sequelize.define('User', {
    fullname: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
    },
    address: {
        type: DataTypes.STRING,
    },
    birth_date: {
        type: DataTypes.DATE,
    },
    gender: {
        type: DataTypes.INTEGER
    },
    profile_photo: {
        type: DataTypes.STRING,
    },
    is_active: {
        type: DataTypes.INTEGER,
    }
})

user.sync();
module.exports = user;