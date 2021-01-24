import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());    /* serve para permitir que outras aplicações se conectem a nossa API. Pq por padrão, ele só permite conexões
iguais. Como nossa conexão é através da porta 3333, ele só permitiria que o nosso front conectasse na nossa API se a porta lá
tbm fosse 3333. Como usaremos a porta 3000 no front, então precisamos usar o cors pra liberar a conexão do front na nossa api */
app.use(express.json());    /* sem isso, quando mandarmos um objeto pelo body via insomnia, não vai
funcionar! Pois por padrão, o express não entende Json, então precisamos falar pra ele que queremos usar json */
app.use(routes);

/*

app.get('/seila', (request, oi) => { só fiz isso para mostrar que o segundo parâmetro
    independente do nome, será sempre interpretado como response. Pelo meu entendimento, essa função
    get sempre espera dois parâmetro... pq colocando um terceiro por exemplo, ele não consegue
    interpretar. E deixando com apenas um parâmetro ele não consegue retornar esse único 
    parâmetro.json pois interpreta que o parâmetro por estar sozinho é o request e não o response.
    const users = [
        { name: 'Alexandre', age: 27 },
        { name: 'Mariana', age: 23 }
    ]

    return oi.json(users)
})

*/

app.listen(3333);