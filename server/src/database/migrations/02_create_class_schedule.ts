import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();
        table.integer('week_day').notNullable();    //campo que representa os dias da semana(de 0 a 6)
        table.integer('from').notNullable();    //a partir de qual hora começa a dar aula
        table.integer('to').notNullable();  //até que horas tem disponível para daras aulas

        //Criando relacionamento:
        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onDelete('CASCADE') 
            .onUpdate('CASCADE');
        /*
        É preciso fazer o relacionamento entre a aula e qual prof que dá essa aula, portanto, precisamos referenciar essa tabela
        a um id de um professor
        */
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropSchema('class_schedule');
}