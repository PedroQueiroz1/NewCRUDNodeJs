'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
       await queryInterface.createTable('friends', {   
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
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE

  });

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     */
      await queryInterface.dropTable('friends');
 
  }
};
