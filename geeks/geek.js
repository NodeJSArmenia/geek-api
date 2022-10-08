import config from "../config/config.js";
import client from "../airtable/client.js";
import { getAvatar, getGeekWebsites } from "../lib/airtable.js";

const { airtable_geeks_token } = config.airtableConfig;

const getGeeks = async () => {
  const data = await client.getTableByName(airtable_geeks_token);
  const mapedData = await Promise.all(
    data.map(async (item) => {
      const { Websites } = item.fields;
      const website = await getGeekWebsites(Websites);
      return mapGeeks(item.fields, website);
    })
  );
  return mapedData;
};

function mapGeeks(geek, website) {
  const { Hashtags, Name, Avatar } = geek;

  return {
    name: Name,
    hashtags: Hashtags || null,
    avatar: getAvatar(Avatar) || null,
    websites: website || null,
  };
}

export default {
  getGeeks,
};
