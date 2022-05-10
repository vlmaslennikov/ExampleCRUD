<!-- ![NestJS+MongoDB](https://miro.medium.com/max/1400/1*q1BmaUDsJepBdcMxRx6iRw.png "NestJS+MongoDB") -->
 <img src="https://miro.medium.com/max/1400/1*q1BmaUDsJepBdcMxRx6iRw.png" alt="NestJS+MongoDB" width="600"/>

# Simple CRUD with NestJS and MongoDB

## 1. Getting started

### 1.1 Requirements

Before starting, make sure you have those components on your workstation:

| TECHNOLOGY | VERSION |
|----------------|:---------:|
| [NodeJS](https://nodejs.org) | 14.19.0 |
| NPM | 6.14.16 |
| [NestJS](https://docs.nestjs.com/) | 8.0.2 |
| [MongoDB](https://www.mongodb.com/docs/manual/installation/) | 4.2.19 |
| [Mongoose](https://docs.nestjs.com/techniques/mongodb) | 6.3.3 |

To change nodejs and npm version use [nvm](https://github.com/nvm-sh/nvm/blob/master/README.md)


### 1.2 Project configuration

Start by cloning this project on your workstation.

``` sh
git clone git@github.com:vlmaslennikov/ExampleCRUD.git
```

The next thing will be to install all the dependencies of the project.

```sh
cd ./ExampleCRUD
npm install
```

Once the dependencies are installed, you must set up the project by creating an `.env` file containing the environment variables used for development.
The names of all environment variables are in the `.example.env` file

## 2. Project structure

This template was made with a well-defined directory structure.

```sh
 src/
  ├── article/  # A module that manages "article" resources
  │   ├── schema
  │   │   └── article.schema.ts
  │   ├── dto
  │   │   └── article.dto.ts
  │   ├── article.module.ts
  │   ├── article.controller.ts
  │   ├── article.service.ts
  │   └── article.controller.ts
  ├── app.module.ts # The main module to which other modules are connected
  └── main.ts # The entry file of the application which uses the core function NestFactory to create a Nest application instance.
```

## 3. Default NPM commands

The NPM commands below are already included with this template and can be used to quickly run, build, debug and lint your project.
 
```sh
# Start the application using the transpiled NodeJS
npm run start
# Run the application in development mode
npm run start:dev
# Transpile the TypeScript files
npm run build
# Run the application in debug mode
npm run start:debug
# Lint the project files using ESLint
npm run lint
```
## 4. Project goals

This project was written solely to show the markup in the README.