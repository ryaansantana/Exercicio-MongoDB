/* CRIAÇÃO DA CONSTANTE COM NOME DO BANCO DE DADOS */
const database = 'BD-EMPRESA';

/* HABILITA O BANCO DE DADOS PARA USO */
use(database);


/* FAZ UMA SELEÇÃO GERAL, SEM NENHUM CRITÉRIO */
db.getCollection('ESTOQUE').find();

/* SELECIONA ATRAVÉS DO FILTRO CATEGORIA */
db.getCollection('ESTOQUE').find({ categoria: 'Mobiliário' });

/* SELECIONA ATRAVÉS DO FILTRO FORNECEDOR */
db.getCollection('ESTOQUE').find({ fornecedor: 'TechPrime' });

/* OCULTANDO CAMPOS */
/* {} É O FILTRO, VAZIO SIGNIFICA "SEM FILTRO", ENTÃO TRAZ TODOS OS PRODUTOS */
/* { _id: 0, imagem: 0 } É A PROJEÇÃO QUE DIZ QUAIS SÃO OS CAMPOS QUE APARECERAM NO RESULTADO */
/* 0 = ESCONDE O CAMPO */
/* 1 = MOSTRAR O CAMPO */
db.getCollection('ESTOQUE').find({}, { _id: 0, imagem: 0 });

/* FILTRO + PROJEÇÃO */
/* { categoria: 'Equipamentos' } FILTRA E TRAZ SÓ OS PRODUTOS DESSA CATEGORIA */
/* { _id: 0, codigo: 1, produto: 1, valor: 1 } MOSTRA APENAS O CÓDIGO, PRODUTO E VALOR, ESCONDENDO O ID */
db.getCollection('ESTOQUE').find(
  { categoria: 'Equipamentos' },
  { _id: 0, codigo: 1, produto: 1, valor: 1 }
);

/* EXECUTA CONSULTA TEXTUAIS DINÂMICAS */
/* descricao É O CAMPO ONDE AS BUSCAS ACONTECEM */
/* /corporativo/ É A EXPRESSÃO REGULAR: PROCURA A PALAVRA CORPORATIVO EM QUALQUER PARTE DO TEXTO */
/* i SIGNIFICA CASE-INSENSITIVE, NÃO DIFERENCIA MAIÚSCULA DE MINÚSCULA, ENCONTRANDO TODOS */
db.getCollection('ESTOQUE').find({ descricao: /corporativo/i });