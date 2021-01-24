//Aqui fica o nosso banco de dados e as configurações

import knex from 'knex';
import path from 'path';    //explicação 59:00(Olhando as oportunidades)

//Migration - controla a versão do banco de dados (é igual um versionamento de código GIT)

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')  //é onde ficará armazenado o banco sqlite no nosso projeto
    },
    useNullAsDefault: true, //Serve para quando não conseguir definir um campo padrão no banco, setar esse campo com NULL
});

export default db;

