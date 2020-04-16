// Importing the mongodb connector and using the client.
const mongoClient = require('mongodb').MongoClient;

const assert = require('assert');

const connectionURL = 'mongodb://localhost:27017';
const dbName = "animalfarm";

mongoClient.connect(connectionURL, {useUnifiedTopology: true }, (error, client) => {
	if (error) {
		throw 'Error connecting to MongoDB ' + error;
    }

    const animalFarmDB = client.db(dbName);
    const buildings = animalFarmDB.collection('buildings');

    // Create Query
    // Insert 1 thing
    //buildings.insertOne({type: "farmhouse" }, (error, response) => {
    //    assert.equal(null, error);
    //    assert.equal(1, response.insertedCount);
    //    client.close();
    //});
    
    // Insert several things
    buildings.insertMany([{type: "hightower"}, {type: "appartment"}], (error, response) => {
        assert.equal(null, error);
        assert.equal(2, response.insertedCount);
        client.close();
    });

    
    
})
