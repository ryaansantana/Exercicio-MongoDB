/* CRIAÇÃO DA CONSTANTE COM O NOME DO BANCO DE DADOS */
const database = 'MongoDB-Livraria';

/* HABILITA O BANCO DE DADOS PARA USO */
use(database);


/* EXEMPLO DE SELEÇÃO COM MÉTODO find (SEM CRITÉRIO) */
db['Livraria'].find();

/* EXEMPLO DE SELEÇÃO COM MÉTODO find COM CRITÉRIO */
db['Livraria'].find({'categoria': 'Ficção Científica'});
db['Livraria'].find({'categoria': 'Fantasia Heroica'});

db['Livraria'].find({'autor': 'Isaac Asimov'});
db['Livraria'].find({'autor': 'J.R.R Tolkien'});

/* EXEMPLO DE SELEÇÃO COM MÉTODO find COM CRITÉRIO E OCULTAÇÃO DE CAMPOS */
db['Livraria'].find({'autor': 'Isaac Asimov'}, {'_id':0, 'codigo':0});

db['Livraria'].find({'autor': 'Isaac Asimov'}, {'_id':0, 'codigo':0, 'descricao':0});

/* EXEMPLO DE SELEÇÃO COM USO DE OPERADOR "LIKE" */
db['Livraria'].find({'descricao':/Robôs/})
db['Livraria'].find({'descricao':/robôs/i})
db['Livraria'].find({'descricao':/ROBÔS/i})
db['Livraria'].find({'descricao':/rObÔs/i}, {'descricao':0})



