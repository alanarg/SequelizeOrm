const Sequelize = require('sequelize');

const dbConfig = require('../config/database');

const User = require('../models/User');
const Address = require('../models/Address');
const Tech = require('../models/Tech');

const connection = new Sequelize(dbConfig);

User.init(connection);
Address.init(connection);
Tech.init(connection);

//Podemos buscar os models para associar pois a cada init o model é 'cadastrado' na conexão
Address.associate(connection.models);
User.associate(connection.models);
Tech.associate(connection.models);



module.exports = connection;