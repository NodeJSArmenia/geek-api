import config from "../config/config.js";
import client from "../airtable/client.js";
import { getImage } from "../lib/airtable.js";

const { airtable_groups_token } = config.airtableConfig;

const getGroups = async () => {
  const groups = await client.getTableByName(airtable_groups_token);
  const mapedGroups = groups.map((item) => mapGroups(item.fields));

  return mapedGroups;
};

function mapGroups(group) {
  const { Name, Avatar, Link } = group;
  return {
    name: Name || null,
    avatar: getImage(Avatar) || null,
    link: Link || null,
  };
}

export default {
  getGroups,
};
