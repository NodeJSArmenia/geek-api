import config from "../../config/config.js";
import client from "../client.js";
import { getImage, getGeekWebsites } from "../../lib/airtable.js";

const { airtable_geeks_token } = config.airtableConfig;

const getGeeks = async () => {
  try {
    const geeks = await client.getTableByName(airtable_geeks_token);
    const mapedGeeks = await Promise.all(
      geeks
        .sort((a, b) => a.fields.position - b.fields.position)
        .map(async (item) => {
          const { Websites } = item.fields;
          const website = await getGeekWebsites(Websites);
          return mapGeeks(item.fields, website);
        })
    );
    return mapedGeeks;
  } catch (err) {
    console.log(err);
  }
};

function mapGeeks(geek, website) {
  const { Hashtags, Name, Avatar } = geek;

  return {
    name: Name,
    hashtags: Hashtags || null,
    avatar: getImage(Avatar) || null,
    websites: website || null,
  };
}

export default {
  getGeeks,
};
