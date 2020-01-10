'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('quartos', 
      { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        
        qnt_cama: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        created_at:{
          type: Sequelize.DATE,
          allowNull:false
        },
        updated_at:{
          type: Sequelize.DATE,
          allowNull:false
        },
      });
    
  },

  down: (queryInterface, Sequelize) => {
       return queryInterface.dropTable('quartos');
  }
};
