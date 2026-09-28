/* CRIAÇÃO DA CONSTANTE COM O NOME DO BANCO DE DADOS */
const database = 'BD3-NoSQL-Produtos';

/* HABILITA O BANCO DE DADOS PARA USO */
use(database);

// ============================================================
// a. Inserir 10 produtos com dados variados (preços entre 100 e 1000)
// ============================================================
//db.produtos.insertMany([
//  { nome: "Mouse Gamer", categoria: "Periféricos", preco: 189.90, estoque: 45 },
//  { nome: "Teclado Mecânico", categoria: "Periféricos", preco: 349.00, estoque: 30 },
//  { nome: "Monitor 24 polegadas", categoria: "Monitores", preco: 899.90, estoque: 12 },
//  { nome: "Headset Bluetooth", categoria: "Áudio", preco: 259.50, estoque: 20 },
//  { nome: "Webcam Full HD", categoria: "Periféricos", preco: 420.00, estoque: 18 },
//  { nome: "SSD 480GB", categoria: "Armazenamento", preco: 310.00, estoque: 40 },
//  { nome: "Cadeira Gamer", categoria: "Móveis", preco: 950.00, estoque: 8 },
//  { nome: "Roteador Wi-Fi 6", categoria: "Redes", preco: 680.00, estoque: 15 },
//  { nome: "Placa de Vídeo Básica", categoria: "Hardware", preco: 999.90, estoque: 5 },
//  { nome: "Suporte para Notebook", categoria: "Acessórios", preco: 129.90, estoque: 60 },
//]);

// ============================================================
// b. Selecionar produtos com valor maior que 700 reais
// ============================================================
//db.produtos.find({ preco: { $gt: 700 } });

// ============================================================
// c. Selecionar produtos com valor menor que 450 reais
// ============================================================
//db.produtos.find({ preco: { $lt: 450 } });

// ============================================================
// d. Selecionar produtos com valor maior ou igual a 500 e menor ou igual a 950
// ============================================================
//db.produtos.find({
//  preco: { $gte: 500, $lte: 950 }
//});