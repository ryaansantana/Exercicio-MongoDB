/* CRIAÇÃO DA CONSTANTE COM O NOME DO BANCO DE DADOS */
const database = 'BD3-NoSQL-AtlasMongoDB';

/* HABILITA O BANCO DE DADOS PARA USO */
use(database);

/* INSERE DIVERSOS REGISTROS NA COLLECTION bd3-nosql-atv1 */
db['bd3-nosql-atv1'].insertMany(
    [
        { cod_aluno: 1,  nome: 'Ana Beatriz Souza', cpf: '111.111.111-11', idade: 17, turma: '3A' },
        { cod_aluno: 2,  nome: 'Ryan Henrique Santana', cpf: '222.222.222-22', idade: 16, turma: '2B' },
        { cod_aluno: 3,  nome: 'Andre Moreira', cpf: '333.333.333-33', idade: 18, turma: '3A' },
        { cod_aluno: 4,  nome: 'Denis Ricardo Santana', cpf: '444.444.444-44', idade: 17, turma: '3B' },
        { cod_aluno: 5,  nome: 'Gustavo Deodato Santos', cpf: '555.555.555-55', idade: 16, turma: '2A' },
        { cod_aluno: 6,  nome: 'Ana Paula Dos Santos Siva', cpf: '666.666.666-66', idade: 18, turma: '3A' },
        { cod_aluno: 7,  nome: 'Gabriela Nunes Silva', cpf: '777.777.777-77', idade: 15, turma: '1B' },
        { cod_aluno: 8,  nome: 'Henrique Oliveira Dias', cpf:'888.888.888-88', idade: 17, turma: '3B' },
        { cod_aluno: 9,  nome: 'Isabela Martins Cruz', cpf: '999.999.999-99', idade: 16, turma: '2B' },
        { cod_aluno: 10, nome: 'João Pedro Araújo', cpf: '101.010.101-01', idade: 18, turma: '3A' }
    ]
    
);