const Sequelize = require('sequelize');
const db = require('../../db');

module.exports = db.define('Friend',{
    id:{
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true    
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    phone:{
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true
    }
})