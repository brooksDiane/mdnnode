const { MongoClient } = require('mongodb');
const uri =
  'mongodb://coderesin:iDQnwtDtJuOFVwxB@ac-kkw2one-shard-00-00.pnalolz.mongodb.net:27017,ac-kkw2one-shard-00-01.pnalolz.mongodb.net:27017,ac-kkw2one-shard-00-02.pnalolz.mongodb.net:27017/?ssl=true&replicaSet=atlas-10tjbr-shard-0&authSource=admin&retryWrites=true&w=majority';
const client = new MongoClient(uri);
async function main() {
  try {
    await client.connect();
  } catch (e) {
    console.error(e);
  }
}

const db = client.db('library');

exports.client = client;
exports.connect = main;
exports.db = db;
exports.authors = db.collection('authors');
exports.genres = db.collection('genres');
exports.books = db.collection('books');
exports.bookInstances = db.collection('bookInstances');
