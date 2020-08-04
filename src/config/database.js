module.exports ={
    dialect:'postgres',
    host:'127.0.0.1',
    username:'postgres',
    password:'postgres',
    database:'sqlnode',
    define:{
      //created_at, updated_at
      timestamps:true,  
      //Nomeclatura das tabelas com underscored: user_table
      underscored: true,
    },

}