# Hackathon Contábil

Este projeto representa a aplicação WEB do desafio do hackathon contábil. Nele contem a dashboard onde a Associação e o escritório de contabilidade irá realizar o controle de suas contas e seus clientes, irá gerar a consolidação bancária e exportar as consolidações já criadas.

## Instalação

Primeiro execute o comando para instalação dos pacotes:

```bash
yarn
```

Em seguida execute a aplicação executando o seguinte comando:

```bash
yarn dev
```

Abra o navegador com o endereço [http://localhost:3000](http://localhost:3000) para visualizar o resultado.

## Features

- [ ] Deve ter opção para a Associação cadastrar, consultar e remover os escritórios de contabilidade com CNPJ e razão social, após autenticação com um usuário e senha de administrador
- [ ] Deve ter opção para o escritório de contabilidade, já cadastrado no sistema pela Associação, criar seu login e senha, incluindo os dados de e-mail, CRC e nome do contador que representa o escritório;
- [ ] Deve ter opção para o escritório cadastrar um cliente (empresário), informando CNPJ e razão social;
- [ ] Deve ter opção para o escritório enviar notificação ao cliente, solicitando autorização para consultar seus dados bancários;
- [ ] Deve ter opção para o escritório selecionar um cliente em especial, informar um intervalo de data, e caso o cliente já tenha autorizado, obter
seus dados bancários, gerar e exibir uma tabela de consolidação bancária, ilustrada na Tabela 1 a seguir. O preenchimento do campo categoria será explicado mais adiante, no item Q;
- [ ] Deve ter opção de se exportar a tabela gerada em arquivo no formato Excel, no computador que exibe a versão web.


## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
