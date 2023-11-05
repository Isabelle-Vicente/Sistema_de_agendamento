## Descrição do Projeto

O projeto de agendamento é pensando para ser um projeto de agendamento de consultas medicas, mas pode ser usando como base para qualquer projeto de agendamento.

## Bibliotecas utilizadas

- Express: O Express.js é uma estrutura executada em cima do node.js que lida com solicitações [HTTP](https://www.notion.so/d5b8ca4aaa32443187544693e3284c6d?pvs=21) feitas a um servidor web.
- Body-parser: O body-parser é um módulo capaz de converter o *body* da requisição para vários formatos. Um desses formatos é *json*, exatamente o que queremos.
- EJS: Embedded JavaScript templating (EJS) e é uma linguagem de modelagem simples que permite gerar marcação HTML com JavaScript simples.
- Sequelize: O Sequelize **é um ORM, ou seja, um mapeador objeto-relacional**. Isso significa que ele permite que você crie modelos (classes) em TypeScript ou JavaScript que representam as tabelas do seu banco de dados.
- Mysql2: Driver do banco de dados de mysql

## Explicação sobre projeto

- Pasta database: Tudo relacionado ao banco de dados;
- Pasta factories: É um pasta com um arquivo chamado AppointmentFactory que criar um buid para fazer a junção de dados de datas para a consulta.
- Pasta public: Tudo que é estático na aplicação fica nessa pasta;
- Pasta service: É um pasta com um arquivo chamado AppointmentService faz o gerenciamento de cada função do roteamento;
- Pasta views: Fica todas as paginas ejs ;
- Index.js: É onde fica toda a logica de roteamento usando o espress.