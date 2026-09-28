/* CRIAÇÃO DA CONSTANTE COM O NOME DO BANCO DE DADOS */
const database = 'MongoDB-Livraria';

/* CRIAÇÃO DA CONSTANTE COM O NOME DA COLEÇÃO DE DADOS */
const collection = 'Livraria';

/* DEFINE O BANCO DE DADOS A SER UTILIZADO NO ATLAS MONGODB */
use('MongoDB-Livraria');
    
/* CRIAÇÃO DA COLECCTION */
db.createCollection(collection);

