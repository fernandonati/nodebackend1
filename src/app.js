const express = require('express'); //add express
const cors    = require('cors'); //cors. 
const { errors } = require('celebrate');
const routes  = require('./routes'); //nned put ./ to identify a file.

const app = express(); //express instance
app.use(cors()); //accept all conection, modify to host later.ex:cors({origin:'http://myhost.com'})
app.use(express.json()); //configure to accep json.
app.use(routes); //configure to routes instance
app.use(errors());


module.exports = app;