const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGODB_URI);
let db;

async function connectMongo() {
  if (db) return db;
  await client.connect();
  db = client.db('nova-studio');
  console.log('MongoDB connected');
  return db;
}

module.exports = connectMongo;