import config from "../../config/config.js";
import client from "../client.js";
import { getImage } from "../../lib/airtable.js";

const { airtable_telegram_groups_token } = config.airtableConfig;

const getTelegramGroups = async () => {
  const telegramGroups = await client.getTableByName(airtable_telegram_groups_token);
  const mapedTelegramGroups = telegramGroups.map((item) => mapTelegramGroups(item.fields));

  return mapedTelegramGroups;
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
