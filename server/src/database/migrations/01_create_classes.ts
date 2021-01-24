import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        //Criando relacionamento:
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE') //caso o prof seja deletado, a aula será deletada automaticamente tbm
            .onUpdate('CASCADE'); //o que vai acontecer com o id do usuário nessa tabela classes se o id do usuário na tabela usuários sofrer alguma alteração.
        /*
        É preciso fazer o relacionamento entre a aula e qual prof que dá essa aula, portanto, precisamos referenciar essa tabela
        a um id de um professor
        */
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropSchema('classes');
}