const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DATABASE_URL;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

export default async function connect() {
    await client.connect();
    const db = client.db("supmaxgymDb")

    return {db, client}
}