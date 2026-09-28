/* CRIAÇÃO DA CONSTANTE COM O NOME DO BANCO DE DADOS */
const database = "BD3-NoSQL-AtlasMongoDB";

/* CRIAÇÃO DA CONSTANTE COM O NOME DA COLEÇÃO DE DADOS */
const collection = 'bd3-nosql-atv1';

/* DEFINE O BANCO DE DADOS A SER UTILIZADO NO ATLAS MONGODB */
use(database);

/* CRIAÇÃO DA COLLECTION */
db.createCollection(collection);