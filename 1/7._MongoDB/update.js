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

    // Update Query
    // Updating one
    /*
    buildings.updateOne({type: "doghouse"}, {$set: {type: "toolshed"}}), (err, r) => {
        assert.equal(null, err);
        assert.equal(1, r.matchedCount);
        assert.equal(1, r.modifiedCount);
        client.close();
    }
    */

    // Update many
    buildings.updateMany({type: "hightower"}, {$set: {type: "stable"}}, (err, r) => {
        assert.equal(null, err);
        assert.equal(1, r.matchedCount);
        assert.equal(1, r.modifiedCount)

        buildings.updateOne({type: "appartment"}, {$set: {type: "greenhouse"}}, (err, r) => {
            assert.equal(null, err);
            assert.equal(1, r.matchedCount);
            assert.equal(1, r.modifiedCount);
            client.close();
        })
    })
})