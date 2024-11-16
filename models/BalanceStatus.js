const DataTypes = require('sequelize');
const sequelize = require('../config/config');

const balance_status = sequelize.define('balance_status',{

    customer_id:{
        type:DataTypes.INTEGER,
    },
    start_date:{
        type:DataTypes.DATE
    },
    balance:{
        type:DataTypes.DECIMAL(15,2)
    },
    balance_type_id:{
        type:DataTypes.INTEGER
    }
});

balance_status.sync();
module.exports = balance_status;