import dotenv from "dotenv";
dotenv.config();

import airtable from "airtable";
airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
  endpointUrl: "https://api.airtable.com",
});

export const base = airtable.base("appsHMdNO7YjRsb8V");
export default dotenv;
