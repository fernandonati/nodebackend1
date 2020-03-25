const conn   = require('../database/conn');

module.exports = {
    async index(request,response) {
        //for pagination.
        const { page = 1 } = request.query;
        const [count] = await conn('incidents').count(); //[] for return only one position same for count[0]
        
        const incidents = await conn('incidents')
        .join('ongs','ongs.id','=','incidents.ong_id') //join tables
        .limit(5) //limit total ecords per page
        .offset((page-1)*5) 
        .select(
                ['incidents.*',
                 'ongs.name',
                 'ongs.email',
                 'ongs.whatsapp',
                 'ongs.city',
                 'ongs.uf']); //return only necessary columns.        

        //the total return in header.
        response.header('X-Total-Count',count['count(*)']);
        return response.json(incidents)
    },

    async create(request,response) {       
        const { title, description, value} = request.body;
        const ong_id = request.headers.authorization;
        const [id] = await conn('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });        
        return response.json({ id });
    },
    
    async delete(request,response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization; //to check if record by ONG.
 
        const incident = await conn('incidents') //select only one record by id of incident.
          .where('id',id)
          .select('ong_id')
          .first();

        if (incident.ong_id != ong_id) { //check if same, if not, return invalid.
            return response.status(401).json({ error: 'Operation not permited. '});
        }  
        else 
        {
           await conn('incidents').where('id',id).delete(); //if here, delele
           return response.status(204).send(); //return 204 if ok.
        }
    }
}; 