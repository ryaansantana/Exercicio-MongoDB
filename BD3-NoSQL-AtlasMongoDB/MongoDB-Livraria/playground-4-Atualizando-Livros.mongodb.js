/* CRIAÇÃO DA CONSTANTE COM O NOME DO BANCO DE DADOS */
const database = 'MongoDB-Livraria';

/* HABILITA O BANCO DE DADOS PARA USO */
use(database);

/* TESTE DE SELEÇÃO GERAL DE DADOS: */
db['Livraria'].find();

/* TESTE DE SELEÇÃO DE DADO ESPECIFICO: */
db['Livraria'].find({titulo:'As Cavernas de Aço'});
db['Livraria'].find({autor:'J.R.R Tolkien'});
db['Livraria'].find({autor:'John Ronald Reuel Tolkien'});

/* ATUALIZA O DADO DE VALOR DE UM LIVRO: */
db['Livraria'].updateOne(
    {titulo: 'As Cavernas de Aço'},
    {
        $set:{valor:200}
    }
);

/* ATUALIZA O DADO DE VALOR DE MAIS DE UM LIVRO: */
db['Livraria'].updateMany(
    {autor: 'J.R.R Tolkien'},
    {
        $set:{autor: 'John Ronald Reuel Tolkien'}
    }
);