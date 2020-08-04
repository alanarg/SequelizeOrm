const express = require('express');
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const TechController = require('./controllers/TechController');
const ReportController = require('./controllers/ReportController');



const routes = express.Router();

routes.post('/users', UserController.create);
routes.get('/users', UserController.read);
//Encadiamento de rotas. Se sempre for um endereço para um usuário em específico informamos o user_id dentro da rota
routes.post('/users/:user_id/addresses', AddressController.store);
routes.get('/users/:user_id/addresses', AddressController.index);



routes.get('/users/:user_id/techs', TechController.index);
routes.post('/users/:user_id/techs', TechController.store);
routes.delete('/users/:user_id/techs', TechController.delete);

routes.get('/report', ReportController.show);




module.exports = routes;