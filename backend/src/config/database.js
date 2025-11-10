import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017"; 

const client = new MongoClient(uri);
const dbName = "aurorax"; 

export async function connectDB() {
  try {
    await client.connect();
    console.log("deu bom");
    const db = client.db(dbName);
    return db;
  } catch (err) {
    console.error("ixe", err);
  }
}
connectDB();