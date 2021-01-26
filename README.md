<h1 align="center">
    <img alt="Proffy" src=".github/logo.svg" height="100px" />
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/alexandrecorazza/proffy?style=flat-square">
  <img alt="GitHub" src="https://img.shields.io/github/license/alexandrecorazza/proffy?style=flat-square"> 
</p>
<p align="center">
  <a href="#bookmark-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#%EF%B8%8F-configuração">Configuração do projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
  <img alt="design do projeto" width="650px" src="./.github/design.png" />
<p>

## :bookmark: Sobre

O **Proffy** é uma aplicação Web desenvolvida para auxiliar na conexão entre alunos e professores, oferecendo aos professores a possibilidade de registrar na plataforma e dar aulas por um preço e horário definido pelo professor e aos alunos a possibilidade de buscar pelas disciplinas de interesse e agendar um horário de acordo com a disponibilidade do professor.
  
Este projeto foi idealizado e desenvolvido pela [Rocketseat](https://rocketseat.com.br/).

## :rocket: Tecnologias

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Expo](https://expo.io/)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [SQLite3](https://www.sqlite.org/index.html)
- [Knex](http://knexjs.org/)

## ⚙️ Configuração

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador
  - É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador
  - É **necessário** ter o gerenciador de pacotes **[Yarn](https://yarnpkg.com/)** instalado ou o **[NPM](https://www.npmjs.com/)**.
  - Por fim, é **essencial** ter o **[Expo](https://expo.io/)** instalado de forma global na máquina

- ### Server (Back-end)

  ```bash
  # Abra um terminal e copie este repositório com o comando
  $ git clone https://github.com/alexandrecorazza/proffy.git
  # ou use a opção de download.

  # Entre na pasta server 
  $ cd proffy/server

  # Instale as dependências
  $ yarn install

  # Rode o servidor
  $ yarn start
  ```

<br>

- ### Web (Front-end)

  ```bash
  # Entre na pasta web com 
  $ cd proffy/web

  # Instale as dependências
  $ yarn install

  # Rode o aplicação
  $ yarn start
  ```
  
## :pushpin: To-Do

- [x] Adicionar lixeira para cancelar disponibilidade de horário
- [ ] Implementar aplicação mobile
- [ ] Autenticação do usuário

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
