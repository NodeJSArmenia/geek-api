import airtable from "airtable";
import config from "../config/config.js";

const { base, airtable_geeks_token } = config.airtableConfig;

export const getGeekWebsites = async (idData) => {
  if (!idData) return;
  const [id] = idData;
  const { fields } = await (
    await getTableByToken(airtable_geeks_token)
  ).find(id);
  delete fields.Geeks;
  delete fields.title;
  return fields;
};

export async function getTableByToken(token) {
  if (!token) return;
  const tableBase = airtable.base(base);
  return tableBase(token);
}

export function getAvatar(Avatar) {
  if (!Avatar) return;
  const {
    thumbnails: {
      large: { url },
    },
  } = Avatar[0];
  return url;
}
