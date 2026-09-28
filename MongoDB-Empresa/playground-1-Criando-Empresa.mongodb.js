/* CRIAÇÃO DA CONSTANTE COM O NOME DO BANCO DE DADOS */
const database = "MongoDB-Empresa";

/* CRIAÇÃO DA CONSTANTE COM O NOME DA COLEÇÃO DE DADOS */
const collection = 'Estoque';

/* DEFINE O BANCO DE DADOS A SER UTILIZADO NO ATLAS MONGODB */
use(database);

/* CRIAÇÃO DA COLLECTION */
db.createCollection(collection);