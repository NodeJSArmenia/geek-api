import config from "../config/config.js";
import client from "../airtable/client.js";
import { mapGeeks } from "../lib/airtable.js";

const { base, airtable_geeks_token } = config.airtableConfig;
const table = base(airtable_geeks_token);

const getGeeks = async () => {
  const mapedData = await client.getMapedData(table, mapGeeks);
  return mapedData;
};

export default {
  getGeeks,
};
