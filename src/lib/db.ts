import { MongoClient, Db } from "mongodb";

let db: Db | null = null;

export async function connectDB(): Promise<Db> {
  if (db) return db;

  const client = await MongoClient.connect(process.env.MONGODB_URI as string);
  db = client.db();
  return db;
}
