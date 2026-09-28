/* CRIAÇÃO DA CONSTANTE COM O NOME DO BANCO DE DADOS */
const database = "MongoDB-Alunos";

/* CRIAÇÃO DA CONSTANTE COM O NOME DA COLEÇÃO DE DADOS */
const collection = 'Alunos';

/* DEFINE O BANCO DE DADOS A SER UTILIZADO NO ATLAS MONGODB */
use(database);

/* CRIAÇÃO DA COLLECTION */
db.createCollection(collection);