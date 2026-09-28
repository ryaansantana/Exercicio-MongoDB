/* CRIAÇÃO DA CONSTANTE COM O NOME DO BANCO DE DADOS */
const database = 'MongoDB-Livraria';

/* HABILITA O BANCO DE DADOS PARA USO */
use(database);

/* TESTE DE SELEÇÃO GERAL DE DADOS: */
db['Livraria'].find();

/* TESTE DE SELEÇÃO DE DADO ESPECIFICO: */
db['Livraria'].find({codigo:'8'});
db['Livraria'].find({autor:'Isaac Asimov'});

/* EXLCUI UM REGISTRO PERANTE UMA CONDIÇÃO */
db['Livraria'].deleteOne({codigo:'8'});

/* EXLCUI TODOS OS REGISTROS PERANTE UMA CONDIÇÃO */
db['Livraria'].deleteMany({autor:'Isaac Asimov'});



