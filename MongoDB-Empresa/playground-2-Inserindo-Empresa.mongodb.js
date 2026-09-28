/* CRIAÇÃO DA CONSTANTE COM O NOME DO BANCO DE DADOS */
const database = 'MongoDB-Empresa';

/* HABILITA O BANCO DE DADOS PARA USO */
use(database);

/* INSERINDO UM REGISTRO ISOLADO NA COLLECTION ESTOQUE */
db.getCollection('Estoque').insertOne({
  codigo: 1001,
  produto: 'Switch 24 Portas Gerenciável',
  fornecedor: 'NetSul Distribuidora',
  descricao: 'Switch corporativo Gigabit para infraestrutura de rede',
  imagem: 'switch24.jpg',
  valor: 1890.00,
  categoria: 'Infraestrutura'
});

/* INSERINDO MÚLTIPLOS REGISTROS NA COLLECTION ESTOQUE */
db.getCollection('Estoque').insertMany([
  {
    codigo: 1002,
    produto: 'Cadeira Ergonômica Executiva',
    fornecedor: 'OfficeMax',
    descricao: 'Cadeira corporativo com apoio lombar e regulagem de altura',
    imagem: 'cadeira.jpg',
    valor: 950.00,
    categoria: 'Mobiliário'
  },
  {
    codigo: 1003,
    produto: 'Mesa de Escritório 1,40m',
    fornecedor: 'OfficeMax',
    descricao: 'Mesa em MDF para uso corporativo',
    imagem: 'mesa.jpg',
    valor: 620.00,
    categoria: 'Mobiliário'
  },
  {
    codigo: 1004,
    produto: 'Notebook i5 16GB',
    fornecedor: 'TechPrime',
    descricao: 'Notebook corporativo para uso administrativo',
    imagem: 'notebook.jpg',
    valor: 4200.00,
    categoria: 'Equipamentos'
  },
  {
    codigo: 1005,
    produto: 'Impressora Multifuncional Laser',
    fornecedor: 'TechPrime',
    descricao: 'Impressora laser com scanner e rede sem fio',
    imagem: 'impressora.jpg',
    valor: 1750.00,
    categoria: 'Equipamentos'
  },
  {
    codigo: 1006,
    produto: 'Teclado e Mouse Sem Fio',
    fornecedor: 'PeriféricosBR',
    descricao: 'Kit periférico para estação de trabalho',
    imagem: 'kit-teclado-mouse.jpg',
    valor: 149.90,
    categoria: 'Periféricos'
  },
  {
    codigo: 1007,
    produto: 'Monitor 24 Polegadas Full HD',
    fornecedor: 'PeriféricosBR',
    descricao: 'Monitor IPS corporativo com entrada HDMI',
    imagem: 'monitor.jpg',
    valor: 899.00,
    categoria: 'Periféricos'
  }
]);