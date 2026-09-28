/* CRIAÇÃO DA CONSTANTE COM O NOME DO BANCO DE DADOS */
const database = 'BD3-NoSQL-Produtos';

/* HABILITA O BANCO DE DADOS PARA USO */
use(database);

/* SELECIONAR PRODUTOS COM VALOR MAIOR QUE 700 */
db.Produtos.find({ preco: { $gt: 700 } });


/* SELECIONAR PRODUTOS COM VALOR MENOR QUE 450 REAIS */
db.Produtos.find({ preco: { $lt: 450 } });


/* SELECIONAR PRODUTOS COM VALOR MAIOR OU IGUA A 500 E MENOR OU IGUAL A 950 */ 
db.Produtos.find({
 preco: { $gte: 500, $lte: 950 }
});