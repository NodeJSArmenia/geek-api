import config from "../../config/config.js";
import client from "../client.js";
import { getImage } from "../../lib/airtable.js";

const { airtable_telegram_groups_token } = config.airtableConfig;

const getTelegramGroups = async () => {
  try {
    const telegramGroups = await client.getTableByName(
      airtable_telegram_groups_token
    );
    const mapedTelegramGroups = telegramGroups
      .sort((a, b) => a.fields.position - b.fields.position)
      .map((item) =>
        mapTelegramGroups(item.fields)
      );
    return mapedTelegramGroups;
  } catch (err) {
    console.log(err);
  }
};

function mapTelegramGroups(group) {
  const { Name, Avatar, Link } = group;
  return {
    name: Name || null,
    avatar: getImage(Avatar) || null,
    link: Link || null,
  };
}

export default {
  getTelegramGroups,
};
