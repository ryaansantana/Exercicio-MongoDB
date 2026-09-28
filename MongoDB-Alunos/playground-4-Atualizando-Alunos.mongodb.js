/* CRIAÇÃO DA CONSTANTE COM O NOME DO BANCO DE DADOS */
const database = 'MongoDB-Alunos';

/* HABILITA O BANCO DE DADOS PARA USO */
use(database);

/* ALTERE SOMENTE O NOME */
db['Alunos'].updateOne(
    { _id: ObjectId('6a8630329a337e575eeac4c9') },
    {
        $set: {
            nome: "Neymar junior"
        }
    }
);

/* ALTERE SOMENTE O CPF */
db['Alunos'].updateOne(
    { _id: ObjectId("6a8630329a337e575eeac4c9") },
    {
        $set: {
            cpf: "123.456.789-00"
        }
    }
);

/* ALTERE SOMENTE O RG */
db['Alunos'].updateOne(
    { _id: ObjectId("6a8630329a337e575eeac4c9") },
    {
        $set: {
            rg: "12.345.678-9"
        }
    }
);