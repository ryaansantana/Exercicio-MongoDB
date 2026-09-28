/* CRIAÇÃO DA CONSTANTE COM O NOME DO BANCO DE DADOS */
const database = 'MongoDB-Alunos';

/* HABILITA O BANCO DE DADOS PARA USO */
use(database);


/* EXCLUINDO ALUNO */
db['Alunos'].deleteOne(
    { _id: ObjectId("6a8630329a337e575eeac4c9") }
);