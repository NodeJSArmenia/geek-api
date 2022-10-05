import dotenv from "dotenv";
dotenv.config();
import airtable from "airtable";

// AirTable Configuration.

airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
  endpointUrl: "https://api.airtable.com",
});

// AirTable Tokens.
// Base.
const base = airtable.base(process.env.AIRTABLE_BASE_TOKEN);
// Table.
const airtable_geeks_token = process.env.AIRTABLE_GEEKS_TOKEN;

// App Configuration.

// Updating during Each Second.
const syncInterval = 1000;
const syncIntervalCount = 3;
const port = process.env.GEEKS_PORT || 3000;

export default {
  airtableConfig: {
    base,
    airtable_geeks_token,
  },
  appConfig: {
    port,
    syncInterval,
    syncIntervalCount,
  },
};
