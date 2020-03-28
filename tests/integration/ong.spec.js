const request = require('supertest');
const app = require('../../src/app');
const conn = require('../../src/database/conn')


describe('ONG',() =>{  //describe test
   
   beforeEach(async ()=>{ //before each test, run migration
      await conn.migrate.rollback(); //zeroDb.
      await conn.migrate.latest();
   });

   afterAll(async () => { //after all tests, destroy the dabaase connection.
      await conn.destroy();
   });

   it('Shold be able to create a new ONG',async () =>{ //test of Generation ID.
      const response = await request(app) //send request to server
        .post('/ongs')
        //.set('Authorization','valid id')
        .send({
            name: "APAD2",
            email: "contato@teste.com",
            whatsapp: "47000000000",
            city: "Rio de Janeiro",
            uf: "SC"
      });      

      expect(response.body).toHaveProperty('id'); //expect to have a 'id' property
      expect(response.body.id).toHaveLength(8); //expect to have 8 characters.
   });
});