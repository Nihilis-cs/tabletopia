import { MongoClient } from 'mongodb';

async function connectToDatabase() {
    const uri = 'mongodb://localhost:27017';
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db('TableTopiaSheets');
        return database;
    }
    catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

export default connectToDatabase;