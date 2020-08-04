'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.createTable('addresses',{

        id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement:true,
          allowNull: false
        },
        //iMPLEMENTEANDO RELACIONAMENTO, O ENDEREÇO É EXCLUSIVAMENTE D UM USUARIO
        user_id:{
          type: Sequelize.INTEGER,
          allowNull:false,
          //Essa propriedade significa que todo user_id da tabela addresses é um id da tabela user
          //cria a chave estrangeira
          references:{model: 'users', key: 'id'},
          //sEMPRE QUE HOUVER UMA ALTERAÇÃO NO RELACIONAMENTO< COMO O ID< SERÁ REFLETIDO NESSA TABELA TB
          onUpdate:'CASCADE',
          //SE DELETADO O USUÁRIO TB POSSÍFAZER AÇÕES, NO CASO DO CASCADE OS ADDRESSES SERÃO DELETADOS TB
          onDelete:'CASCADE',

        },
        cep:{
          type: Sequelize.STRING,
          allowNull: false,

        },
        rua:{
          type: Sequelize.STRING,
          allowNull: false,

        },
        numero:{
          type: Sequelize.INTEGER,
          allowNull: false,

        },
        created_at:{
          type: Sequelize.DATE,
          allowNull:false,

        },
        updated_at:{
          type: Sequelize.DATE,
          allowNull: false,

        },
      });
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.dropTable('addresses');
   
  }
};
