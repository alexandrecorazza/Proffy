import Knex from 'knex';
//quando alguém entrar em contato com o prof, vai marcar com qual prof foi o contato e o horário.


export async function up(knex: Knex) {
    return knex.schema.createTable('connections', table => {
        //Criando relacionamento:
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE') 
            .onUpdate('CASCADE');
       
        table.timestamp('created_at')   //salvar quando foi feita essa conexão
            .defaultTo(knex.raw('CURRENT_TIMESTAMP')) //pega o horário atual
            .notNullable(); //o campo não pode ser nulo

    });
}

export async function down(knex: Knex) {
    return knex.schema.dropSchema('connections');
}