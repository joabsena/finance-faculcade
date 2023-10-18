<p align="center">
<img src="https://img.shields.io/github/languages/code-size/joabsena/finance-faculdade" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/last-commit/joabsena/finance-faculdade" alt="GitHub last commit" />
<img src="https://img.shields.io/github/commit-activity/m/joabsena/finance-faculdade" alt="GitHub commit activity month" />
<img src="https://img.shields.io/github/license/joabsena/finance-faculdade" alt="GitHub license" />
</p>

<p></p>
<p></p>

# 📌 Overview

Finance-faculdade is a finance project developed for college evaluation. It utilizes essential dependencies such as cors, express, json2csv, mysql, typeorm, and typescript.

## 🔍 Table of Contents

* [📁 Project Structure](#project-structure)

* [📝 Project Summary](#project-summary)

* [💻 Stack](#stack)

* [⚙️ Setting Up](#setting-up)

* [🚀 Run Locally](#run-locally)

* [🙌 Contributors](#contributors)

* [☁️ Deploy](#deploy)

* [📄 License](#license)

## 📁 Project Structure

```bash
├── .dockerignore
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── ormconfig.json
├── package.json
├── src
│   ├── controllers
│   │   ├── CreateCategoriesController.ts
│   │   ├── CreateTransactionController.ts
│   │   ├── FinancialExportController.ts
│   │   ├── ListAllCategoriesController.ts
│   │   └── ListAllTransactionController.ts
│   ├── database
│   │   ├── index.ts
│   │   └── migrations
│   │       ├── 1637884777919-CreateCategories.ts
│   │       └── 1637886074067-Transactions.ts
│   ├── entities
│   │   ├── Category.ts
│   │   └── Transaction.ts
│   ├── repositories
│   │   ├── CategoriesRepository.ts
│   │   └── TransactionRepository.ts
│   ├── routes.ts
│   ├── server.ts
│   └── services
│       ├── CreateCategoriesService.ts
│       ├── CreateTransactionService.ts
│       ├── FinancialExportService.ts
│       ├── ListAllCategoriesService.ts
│       └── ListAllTransactionsService.ts
├── teste.csv
├── tsconfig.json
├── yarn-error.log
└── yarn.lock
```

## 📝 Project Summary

- [**src**](src): Main source code directory of the TypeScript project.
- [**src/controllers**](src/controllers): Contains the controller classes responsible for handling HTTP requests.
- [**src/database**](src/database): Manages database-related functionalities and configurations.
- [**src/database/migrations**](src/database/migrations): Stores migration files for database schema changes.
- [**src/entities**](src/entities): Defines the entity classes representing database tables.
- [**src/repositories**](src/repositories): Implements the data access layer for interacting with the database.
- [**src/services**](src/services): Contains the business logic and service classes for handling application-specific operations.

## 💻 Stack

- [express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
- [typeorm](https://typeorm.io/): ORM that supports both Active Record and Data Mapper patterns.
- [cors](https://www.npmjs.com/package/cors): Middleware to enable CORS (Cross-Origin Resource Sharing) in Express.js.
- [mysql](https://www.npmjs.com/package/mysql): MySQL client for Node.js.
- [uuid](https://www.npmjs.com/package/uuid): Generate RFC-compliant UUIDs.
- [nodemon](https://www.npmjs.com/package/nodemon): Utility that automatically restarts the server during development.
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev): Lightweight TypeScript execution and reloading tool.
- [typescript](https://www.typescriptlang.org/): Typed superset of JavaScript that compiles to plain JavaScript.

## 🚀 Run Locally
1.Clone the finance-faculdade repository:
```sh
git clone https://github.com/joabsena/finance-faculdade
```
2.Install the dependencies with one of the package managers listed below:
```bash
pnpm install
npm install
yarn install
```
3.Start the development mode:
```bash
pnpm dev
npm run dev
yarn dev
```

## 🙌 Contributors
<a href="https://github.com/joabsena/finance-faculdade/graphs/contributors">
<img src="https://contrib.rocks/image?repo=joabsena/finance-faculdade" />
</a>

