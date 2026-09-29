const { MongoClient } = require('mongodb');
const uri = 'mongodb://127.0.0.1:27017/kisan_portal';

async function test() {
  const client = new MongoClient(uri, { serverSelectionTimeoutMS: 3000 });
  try {
    console.log("Connecting native driver...");
    await client.connect();
    console.log("Success! Ping:", await client.db('kisan_portal').command({ ping: 1 }));
  } catch (e) {
    console.error("Failed:", e.message);
  } finally {
    await client.close();
  }
}
test();
