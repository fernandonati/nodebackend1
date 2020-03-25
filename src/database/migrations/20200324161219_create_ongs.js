exports.up = function(knex) {
    return knex.schema.createTable('ongs',function(table){
        table.string('id',40).primary();
        table.string('name',60).notNullable();        
        table.string('email',40).notNullable();
        table.string('whatsapp',20).notNullable();
        table.string('city',40).notNullable();
        table.string('uf',2).notNullable();
    }); 
};

exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};
