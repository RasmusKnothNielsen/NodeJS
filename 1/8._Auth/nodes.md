# Notes for Mandatory II

## Libraries to use

Knex.js and Objection.js

Knex.js helps us with data migration


Objection is used to create an extra abstraction layer to make objects with.
Makes queries even easier


## Workflow

npm init

Add knex to it

Add knex globally

knex init

### Create migrations

> $ npm run migrate:make [name]

eg 

> $ npm run migrate:make initial_schema

### Create seeds

> $ npm run seed:make [name]

eg

> $ npm run seed:make 001._roles


### Roll back server and re add seeds

> $ npm run seed:run 000.delete

> $ npm run migrate:rollback

> $ npm run migrate:latest

> $ npm run seed:run 001._roles
