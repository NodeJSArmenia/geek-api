import config from "../../config/config.js";
import client from "../client.js";
import { mapBaseData } from "../../lib/airtable.js";

const { airtable_podcasts_token } = config.airtableConfig;

const getPodcasts = async () => {
  try {
    const podcasts = await client.getTableByName(airtable_podcasts_token);
    const mapedPodcasts = podcasts.map((item) => mapBaseData(item.fields));
    return mapedPodcasts;
  } catch (err) {
    console.log(err);
  }
};

export default {
  getPodcasts,
};
