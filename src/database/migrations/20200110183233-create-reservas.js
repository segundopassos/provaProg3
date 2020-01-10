'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('reservas', 
      { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        hospede_id:{
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model: 'hospedes', key:'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }, 
        
        valor: {
          type: Sequelize.FLOAT,
          allowNull: false
        },
        data_saida:{
          type: Sequelize.DATE,
          allowNull:false
        },
        data_entrada:{
          type: Sequelize.DATE,
          allowNull:false
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
       return queryInterface.dropTable('reservas');
  }
};
