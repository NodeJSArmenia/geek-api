import dotenv from "dotenv";
dotenv.config();

import airtable from "airtable";
airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
  endpointUrl: "https://api.airtable.com",
});

export const base = airtable.base("appsHMdNO7YjRsb8V");
export const syncInterval = 1000;
export const syncIntervalCount = 3;
export const port = 4000 || 3000;
export default dotenv;
