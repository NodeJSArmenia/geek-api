import config from "../config/config.js";
import client from "../airtable/client.js";
import { getAvatar } from "../lib/airtable.js";

const { airtable_groups_token } = config.airtableConfig;

const getGroups = async () => {
  const data = await client.getTableByName(airtable_groups_token);
  const mapedData = data.map((item) => mapGroups(item.fields));

  return mapedData;
};

function mapGroups(group) {
  const { Name, Avatar, Link } = group;
  return {
    name: Name || null,
    avatar: getAvatar(Avatar) || null,
    link: Link || null,
  };
}

export default {
  getGroups,
};
