const Sequelize = require('sequelize');
const db = new Sequelize('crud_node','root', 'root',{
    host:"localhost",
    dialect:"mysql"
});

module.exports = db;
