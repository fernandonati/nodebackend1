const express = require('express'); //add express
const cors    = require('cors'); //cors. 
const routes  = require('./routes'); //nned put ./ to identify a file.

const app = express(); //express instance
app.use(cors()); //accept all conection, modify to host later.ex:cors({origin:'http://myhost.com'})
app.use(express.json()); //configure to accep json.
app.use(routes); //configure to routes instance


app.listen(3333); //server listen on port...