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


### When installing the app on another machine

Download and install
> $ git clone [address]
> $ cd [dir]
> $ npm install

Start MySQL server
> $ mysql.server start
> $ mysql -uroot -p
> CREATE DATABASE [db-name]

Alter the mysqlCredentials.template.js 
-> mysqlCredentials.js
Write the db name,  user and password in the file

Create the tables of the databse
> $ npm run migrate:latest
> $ npm run seed:run 001._users
