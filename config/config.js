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
    airtable_telegram_groups_token: process.env.AIRTABLE_TELEGRAM_GROUPS_TOKEN,
    airtable_books_token: process.env.AIRTABLE_BOOKS_TOKEN,
    airtable_podcasts_token: process.env.AIRTABLE_PODCASTS_TOKEN,
    airtable_blogs_token: process.env.AIRTABLE_BLOGS_TOKEN,
  },
  appConfig: {
    port: process.env.PORT || 4000,
    syncInterval: 10000,
    syncIntervalCount: 3,
    origin: process.env.CLIENT_URL,
  },
};
