import { base } from "../config/env.js";
import { getGeekWebsites } from "../lib/airtable.js";
import airtable from "./airtable.js";
// create env config
const table = base("tblv5RDJcHsiFaBkn");

async function getMapedData() {
  try {
    const geeks = await table.select().firstPage();
    const mapedGeeks = geeks.map((geek) => mapGeeks(geek));
    return await Promise.all(mapedGeeks);
  } catch (err) {
    console.error(err);
  }
}

async function mapGeeks(geek) {
  const {
    fields: { Keywords, Name, Websites },
  } = geek;

  return {
    keyWords: Keywords,
    name: Name,
    websites: await getGeekWebsites(Websites),
  };
}

async function syncGeeks() {
  return await airtable.read();
}

export default {
  getMapedData,
  syncGeeks,
  table,
};
