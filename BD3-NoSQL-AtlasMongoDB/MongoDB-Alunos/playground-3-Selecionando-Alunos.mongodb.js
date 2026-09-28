/* CRIAÇÃO DA CONSTANTE COM NOME DO BANCO DE DADOS */
const database = 'MongoDB-Alunos';

/* HABILITA O BANCO DE DADOS PARA USO */
use(database);

/* LISTAR TODOS OS ALUNOS */
db['Alunos'].find();

/* LISTAR UM ALUNO PELO CPF SEM O CAMPO "COD_ALUNO" */
db['Alunos'].find(
 { cpf: '333.333.333-33' },
 { cod_aluno: 0 }
);

/* LISTAR UM ALUNO PELO CPF SEM "COD_ALUNO" E SEM O ID */
db['Alunos'].find(
 { cpf: '333.333.333-33' },
 { cod_aluno: 0, _id: 0 }
);