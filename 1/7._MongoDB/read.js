// Importing the mongodb connector and using the client.
const mongoClient = require('mongodb').MongoClient;

const connectionURL = 'mongodb://localhost:27017';
const dbName = "animalfarm";

mongoClient.connect(connectionURL, {useUnifiedTopology: true }, (error, client) => {
	if (error) {
		throw 'Error connecting to MongoDB ' + error;
    }

    const animalFarmDB = client.db(dbName);
    const buildings = animalFarmDB.collection('buildings');

    // Read Query
    buildings.find({type: {$exists: true}}).toArray((error, foundBuildings) => {
        console.log(foundBuildings);
        client.close();
    });
})

