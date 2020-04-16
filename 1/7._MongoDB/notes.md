# Notes for SQL

## Relational Databases vs. NoSQL

### Relational database
MySQL
MariaDB
OracleDB
PostgreSQL
MsSQL
CouchDB

### NoSQL
MongoDB
DynamoDB
Firebase
Neo4J
Realm

#### In MongoDB, you have something like collections: furniture

Document based database

[
    {
        "key": "value"
    },
    {
        "price": 20.00
    }
]

#### MongoDB usecases

Do use:

- Not sure about the schema yet
    -Leads to rapid prototyping
        -Type of companies: start-ups

Don't use:

- Data that is consistent or relational

- Data that is crucial

- If you have a set schema

More info:
    In MongoDB, you handle relations, data validations etc. in the application layer
    For relational databases, you can also do it in the application layer
    but the database is another safety net.


### Installing MongoDB on MacOS

Follow this guide:
(https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

### How to run MongoDB as a MacOS Service

> $ brew services start mongodb-community@4.2

### Or

> $ mongod -dbpath=/Users/rasmus/data/db

### How to stop MongoDB as a MacOS Service

> $ brew services stop mongodb-community@4.2

### How to run MongoDB as a background service

> $ mongod --config /usr/local/etc/mongod.conf --fork

### How to stop MongoDB as a background service

To stop a mongod running as a background process, connect to the mongod from the mongo shell, and issue the shutdown command as needed.

### Verify if mongoDB is running

> $ ps aux | grep -v grep | grep mongod

## MongoDB syntax

### Create Database

> $ use animalfarm

### Create Collection inside Database

> db.createCollection("buildings")

### Inserting into a collection

> db.buildings.insert({type: "windmill" })

### Selecting (find) everything in a Collection

> db.buildings.find()

### Selecting specific Document in Collection

> db.buildings.find({type: "windmill"})

### Updating specific Document in Collection



### Delete specific Document in Collection


