# MongoDB

Repositório destinado às atividades práticas, exercícios e estudos de **NoSQL com MongoDB**, desenvolvidos durante o curso técnico de **Desenvolvimento de Sistemas da Etec**.

O repositório reúne exemplos práticos de criação de bancos de dados, inserção, consultas, atualização e exclusão de documentos utilizando o **MongoDB Atlas** e a extensão **MongoDB for VS Code**.

---

## 📂 Estrutura do Repositório

```text
.
└── BD3-NoSQL-AtlasMongoDB/
    ├── playground-1-Criando-db.mongodb.js
    ├── playground-2-Inserindo.mongodb.js
    ├── playground-3-Selecionando.mongodb.js
    ├── playground-4-Atualizando.mongodb.js
    └── playground-5-Excluindo.mongodb.js
```

### Arquivos

| Arquivo                                | Descrição                                                              |
| -------------------------------------- | ---------------------------------------------------------------------- |
| `playground-1-Criando-db.mongodb.js`   | Criação e configuração do banco de dados e da coleção de alunos        |
| `playground-2-Inserindo.mongodb.js`    | Inserção de documentos na coleção de alunos                            |
| `playground-3-Selecionando.mongodb.js` | Consultas e seleção de documentos utilizando filtros                   |
| `playground-4-Atualizando.mongodb.js`  | Atualização de informações dos alunos utilizando comandos de alteração |
| `playground-5-Excluindo.mongodb.js`    | Exclusão de documentos de alunos utilizando comandos de remoção        |

---

## ⚠️ Novas Atualizações

Foram adicionadas **duas novas atividades** ao repositório:

* 📝 **Atualização de alunos:** atividade responsável por alterar informações dos documentos existentes na coleção, como nome, CPF e RG.
* 🗑️ **Exclusão de alunos:** atividade responsável pela remoção de um aluno da coleção utilizando comandos de exclusão do MongoDB.

Os novos arquivos são:

```text
playground-4-Atualizando.mongodb.js
playground-5-Excluindo.mongodb.js
```

> **Atenção:** recomenda-se executar os playgrounds na ordem apresentada, principalmente quando estiver utilizando um banco de dados criado especificamente para as atividades.

---

## 📚 Atividades

| Pasta                     | Descrição                                                                                             |
| ------------------------- | ----------------------------------------------------------------------------------------------------- |
| `BD3-NoSQL-AtlasMongoDB/` | Criação do banco e da collection, inserção de documentos, consultas, atualização e exclusão de alunos |

As atividades utilizam uma **coleção de alunos** como exemplo para demonstrar as principais operações do MongoDB.

### Operações trabalhadas

* Criar banco de dados
* Criar collection
* Inserir documentos
* Consultar documentos
* Utilizar filtros nas consultas
* Atualizar documentos
* Alterar informações específicas de um aluno
* Excluir documentos
* Trabalhar com identificadores (`_id`)
* Utilizar CPF e RG como critérios de busca

---

# ☁️ Como criar um Cluster no MongoDB Atlas

O **MongoDB Atlas** é o serviço em nuvem utilizado para hospedar o banco de dados MongoDB.

### 1. Criar uma conta

Acesse o MongoDB Atlas:

https://www.mongodb.com/cloud/atlas

Crie uma conta ou faça login caso já possua uma.

### 2. Criar um banco de dados

Após entrar na plataforma:

1. Clique em **Build a Database**
2. Selecione a opção **Free (M0)**
3. Escolha o provedor de nuvem
4. Selecione uma região próxima
5. Clique em **Create**

### 3. Configurar o acesso

Durante o **Security Quickstart**:

* Crie um usuário para acessar o banco;
* Defina uma senha;
* Guarde essas informações em um local seguro;
* Em **Network Access**, adicione o seu endereço IP.

Para estudos e testes, também é possível utilizar:

```text
0.0.0.0/0
```

> ⚠️ **Aviso:** utilizar `0.0.0.0/0` permite conexões de qualquer endereço IP. Essa configuração deve ser utilizada com cautela e, preferencialmente, apenas em ambientes de estudo e testes.

### 4. Aguardar a criação

Aguarde alguns minutos até que o cluster seja provisionado.

Depois:

**Connect → Drivers**

ou, caso prefira utilizar uma interface gráfica:

**Connect → Compass**

Copie a **connection string** fornecida pelo MongoDB Atlas.

Um exemplo de estrutura é:

```text
mongodb+srv://usuario:senha@cluster.mongodb.net/
```

---

# 💻 Como executar os exercícios no VS Code

### 1. Instalar a extensão

No VS Code, procure e instale a extensão:

**MongoDB for VS Code**

### 2. Conectar ao MongoDB Atlas

Na extensão MongoDB:

1. Clique em **Connect**
2. Informe a connection string do MongoDB Atlas
3. Substitua `<password>` pela senha do usuário criado no Atlas
4. Finalize a conexão com o cluster

### 3. Abrir os playgrounds

Abra um dos arquivos:

```text
.mongodb.js
```

Os comandos podem ser executados utilizando o botão de **Play** ao lado de cada bloco ou através da opção **Run All**.

### 4. Ordem recomendada

Para a atividade `BD3-NoSQL-AtlasMongoDB`, recomenda-se executar os arquivos nesta ordem:

```text
1 → Criação do banco
2 → Inserção
3 → Consultas
4 → Atualização
5 → Exclusão
```

Essa sequência permite acompanhar o fluxo completo de manipulação dos documentos no MongoDB.

---

# 🗄️ Tecnologias utilizadas

* **MongoDB**
* **MongoDB Atlas**
* **MongoDB for VS Code**
* **JavaScript**
* **MongoDB Playground**
* **NoSQL**

---

# 🎓 Sobre o projeto

Este repositório foi desenvolvido para fins **acadêmicos e educacionais**, servindo como registro das atividades práticas realizadas durante o curso técnico de **Desenvolvimento de Sistemas da Etec**.

O objetivo é documentar a evolução dos conhecimentos relacionados a bancos de dados **NoSQL**, especialmente utilizando o MongoDB.

Novas atividades serão adicionadas ao repositório conforme o conteúdo for desenvolvido durante o curso.
