import * as sdk from "node-appwrite";

const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT;
const PROJECT_ID = process.env.PROJECT_ID;
const API_KEY = process.env.API_KEY;
const DATABASE_ID = process.env.DATABASE_ID;
const PATIENT_COLLECTION_ID = process.env.PATIENT_COLLECTION_ID;
const DOCTOR_COLLECTION_ID = process.env.DOCTOR_COLLECTION_ID;
const APPOINTMENT_COLLECTION_ID = process.env.APPOINTMENT_COLLECTION_ID;
const BUCKET_ID = process.env.NEXT_PUBLIC_BUCKET_ID;

export {
  ENDPOINT,
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  BUCKET_ID,
};

const required: [string, string | undefined][] = [
  ["NEXT_PUBLIC_ENDPOINT", ENDPOINT],
  ["PROJECT_ID", PROJECT_ID],
  ["API_KEY", API_KEY],
  ["DATABASE_ID", DATABASE_ID],
  ["PATIENT_COLLECTION_ID", PATIENT_COLLECTION_ID],
  ["APPOINTMENT_COLLECTION_ID", APPOINTMENT_COLLECTION_ID],
  ["NEXT_PUBLIC_BUCKET_ID", BUCKET_ID],
];

const missing = required
  .filter(([, value]) => !value?.trim())
  .map(([name]) => name);

if (missing.length > 0) {
  throw new Error(
    `Appwrite env is incomplete (missing: ${missing.join(
      ", "
    )}). Copy .env.example to .env.local and set all variables from your Appwrite project. ` +
      `Without NEXT_PUBLIC_ENDPOINT you get Invalid URL / "undefined/users".`
  );
}

const client = new sdk.Client();

client.setEndpoint(ENDPOINT!).setProject(PROJECT_ID!).setKey(API_KEY!);

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);
