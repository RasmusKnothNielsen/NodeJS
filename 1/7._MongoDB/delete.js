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

    // Delete query

    // Delete 1 document
    /*
    buildings.deleteOne({type: "toolshed"}, (err, r) => {
        assert.equal(null, err);
        assert.equal(1, r.deletedCount);
        client.close();
    })
    */

    // Delete several documents (Bad practice, since it can delete more than you think)
    buildings.deleteMany({type: "stable"}, (err, r) => {
        assert.equal(null, err);
        assert.equal(1, r.deletedCount);
        buildings.deleteOne({type: "greenhouse"}, (err, r) => {
            assert.equal(null, err);
            assert.equal(2, r.deletedCount);
            client.close();
        })
    })
})

