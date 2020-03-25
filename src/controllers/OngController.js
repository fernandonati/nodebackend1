const crypto = require('crypto');
const conn   = require('../database/conn');

module.exports = {
   async index(request,response) {
     const ongs = await conn('ongs').select('*');
     return response.json(ongs);
   },
   async create(request,response) {
      const { name,email,whatsapp,city,uf } = request.body;  //desestruct  
      const id = crypto.randomBytes(4).toString('HEX'); //to create id.
    
      await conn('ongs').insert({ //wait to wait the call.
       id,
       name,
       email,
       whatsapp,
       city,
        uf
      });
      return response.json({id}); //return new id
    }
}