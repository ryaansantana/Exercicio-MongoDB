/* CRIAÇÃO DA CONSTANTE COM O NOME DO BANCO DE DADOS */
const database = 'BD3-NoSQL-AtlasMongoDB';

/* HABILITA O BANCO DE DADOS PARA USO */
use(database);


/* EXCLUINDO ALUNO */
db['bd3-nosql-atv2'].deleteOne(
    { _id: ObjectId("6a8630329a337e575eeac4c9") }
);