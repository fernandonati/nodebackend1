const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController =  require('./controllers/IncidentController');
const ProfileController =  require('./controllers/ProfileController');
const SessionController =  require('./controllers/SessionController');
const routes = express.Router();

//all routes logic inside a controller.
//****************** ONG ***************************
routes.get('/ongs',OngController.index);  //get all data 
routes.post('/ongs', OngController.create); //insert a new record.
//****************** INCIDENT ***************************
routes.get('/incidents',IncidentController.index);
routes.post('/incidents',IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);
//****************** PROFILE ***************************
routes.get('/profile',ProfileController.index);

//****************** LOGIN ***************************
routes.post('/sessions',SessionController.create);


//export data.
module.exports = routes;