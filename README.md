<p align="center">
<img src="https://i.imgur.com/hZaDCf4.png" width="350" title="Proffy">
</p>

# Proffy

O projeto Proffy é uma aplicação em NodeJS + WEB em React e Mobile em React Native que tem o objetivo de permitir que os alunos possam gerenciar a disponibilidade da grade de aulas de professores.

# O que foi usado nos projetos
  - ESLint
  - Prettier
  - Express
    - Typescript
    - SQLite
    - Knex
  - React JS & React Native
    - Styled Components
    - Expo Bare Workflow
    - Axios

### Como eu faço para executar o serviço do backend?

```sh
$ cd server
$ yarn install && yarn start
```

Feito isso o serviço de backend estará funcionando na porta :3333. 

### Como eu faço para executar o serviço do frontend?

```sh
$ cd web
$ yarn install && yarn start
```

Feito isso o serviço de frontend estará funcionando na porta :3000 consultando as rotas que o serviço do backend disponibilizou pra gente. 

<img src="https://imgur.com/Jh1Trvf.png" title="Proffy WEB">

### Como eu faço para executar o serviço do mobile?

```sh
$ cd mobile
$ yarn install 
$ yarn start && yarn run android OU yarn start && yarn run ios
```

Feito isso o serviço de mobile estará funcionando no dispositivo selecionado consultando as rotas que o serviço do backend disponibilizou pra gente. 

<img src="https://github.com/fauzerjunnior/proffy/blob/master/mobile/src/assets/images/proffy-mobile.gif" height="700" title="Proffy Mobile">


### Vale lembrar

O backend vai esperar encontrar uma base de SQLite chamada de database.sqlite para trabalhar todas as manipulações internas da aplicação. :) 

