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