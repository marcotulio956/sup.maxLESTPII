const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DATABASE_URL;
if (!uri) {
  throw new Error(
    'Definir uri em .env.local'
  )
}

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
export default async function connect() {
    await client.connect();
    const db = client.db("SupMax")

    return {db, client}
}