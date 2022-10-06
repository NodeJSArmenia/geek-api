import config from "../config/config.js";
import client from "../airtable/client.js";
import { mapGeeks } from "../lib/airtable.js";

const { airtable_geeks_token } = config.airtableConfig;

const getGeeks = async () => {
  const data = await client.getTableByName(airtable_geeks_token);
  const mapedData = data.map((item) => mapGeeks(item));
  console.log(await Promise.all(mapedData), "Maped Data"); // EveryThing is Ok here.
  return await Promise.all(mapedData);
};

export default {
  getGeeks,
};
