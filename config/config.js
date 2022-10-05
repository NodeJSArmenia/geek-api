import dotenv from "dotenv";
dotenv.config();
import airtable from "airtable";

// AirTable Configuration.

airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
  endpointUrl: "https://api.airtable.com",
});

export default {
  airtableConfig: {
    base: process.env.AIRTABLE_BASE_TOKEN,
    airtable_geeks_token: process.env.AIRTABLE_GEEKS_TOKEN,
  },
  appConfig: {
    port: process.env.GEEKS_PORT || 3000,
    syncInterval: 1000,
    syncIntervalCount: 3,
  },
};