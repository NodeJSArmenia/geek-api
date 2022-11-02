import airtable from "airtable";
import config from "../config/config.js";

const { base, airtable_geeks_token } = config.airtableConfig;

export const getGeekWebsites = async (idData) => {
  try {
    if (!idData) return;
    const [id] = idData;
    const { fields } = await (
      await getTableByToken(airtable_geeks_token)
    ).find(id);
    delete fields.Geeks;
    delete fields.title;
    delete fields.position;
    return fields;
  } catch (err) {
    console.log(err);
  }
};

export function getTableByToken(token) {
  if (!token) return;
  const tableBase = airtable.base(base);
  return tableBase(token);
}

export function getImage(Avatar) {
  if (!Avatar) return;
  const {
    thumbnails: {
      large: { url },
    },
  } = Avatar[0];
  return url;
}

export function getFile(File) {
  if (!File) return;
  const { url } = File[0];
  return url;
}

export function mapBaseData(data) {
  const { Name, Hashtags, Link, Image } = data;

  return {
    name: Name,
    hashtags: Hashtags,
    link: Link,
    image: getImage(Image),
  };
}
