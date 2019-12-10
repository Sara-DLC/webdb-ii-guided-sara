## Table Schema Design

Migrations is like Git for DB schemas.

Migrations keep your DB design in sync with the application code.

> Every change to the DB schema MUST be recorded in a migration file

## Migrations

Install `knex cli` :  `npm i -g knex`

Create a knex configuration file (knexfile.js). Type: knex init

Update to teach knex how to connect to our DB

***(this knex file will hold the different configs to connect to database)***

To create a migration type: `knex migrate: make migrationName`

To run a migration type: `knex migrate:latest`

## Seeds

To create a seed: `knex seed:make nameOfSeed`
To run the seeds: `knex seed:run`
