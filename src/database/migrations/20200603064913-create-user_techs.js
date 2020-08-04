'use strict';
//ESSA TABELA BASICAMENTE É O INNER JOI DE UM RELACIONAMENTO N PARA N
module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.createTable('user_techs',{

        id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement:true,
          allowNull: false
        },
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
        tech_id:{
          type: Sequelize.INTEGER,
          allowNull:false,
          //Essa propriedade significa que todo user_id da tabela addresses é um id da tabela user
          //cria a chave estrangeira
          references:{model: 'techs', key: 'id'},
          //sEMPRE QUE HOUVER UMA ALTERAÇÃO NO RELACIONAMENTO< COMO O ID< SERÁ REFLETIDO NESSA TABELA TB
          onUpdate:'CASCADE',
          //SE DELETADO O USUÁRIO TB POSSÍFAZER AÇÕES, NO CASO DO CASCADE OS ADDRESSES SERÃO DELETADOS TB
          onDelete:'CASCADE',
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
   
      return queryInterface.dropTable('user_techs');
   
  }
};
