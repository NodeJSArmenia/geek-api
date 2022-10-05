import { base } from "../config/env.js";

// create env config
const table = base("tblv5RDJcHsiFaBkn");

async function loadGeeks() {
  try {
    const geeks = await table.select().firstPage();
    const minifyedGeeks = geeks.map((geek) => minifyGeek(geek));
    return await Promise.all(minifyedGeeks);
  } catch (err) {
    console.error(err);
  }
}

async function mapGeeks() {
  const {
    fields: { Keywords, Name, Websites },
  } = geek;

  return {
    keyWords: Keywords,
    name: Name,
    websites: await getGeekWebsites(Websites),
  };
}
