const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const OngController = require('./controllers/OngController');
const IncidentController =  require('./controllers/IncidentController');
const ProfileController =  require('./controllers/ProfileController');
const SessionController =  require('./controllers/SessionController');
const routes = express.Router();

//all routes logic inside a controller.
//****************** ONG ***************************
routes.get('/ongs',OngController.index);  //get all data 



routes.post('/ongs',celebrate({ //insert a new record. //added celebrate validation.
  [Segments.BODY] : Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
  })
}),OngController.create); 

//****************** INCIDENT ***************************
routes.get('/incidents',celebrate({
    [Segments.QUERY] : Joi.object().keys({
        page: Joi.number(),
    })
}),IncidentController.index);

routes.post('/incidents',IncidentController.create);

routes.delete('/incidents/:id',celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}),IncidentController.delete); 


//****************** PROFILE ***************************
routes.get('/profile',celebrate({
  [Segments.HEADERS] : Joi.object({
      authorization: Joi.string().required(),
  }).unknown(), //necessary because anothers headers params.
}) ,ProfileController.index);


//****************** LOGIN ***************************
routes.post('/sessions',SessionController.create);


//export data.
module.exports = routes;