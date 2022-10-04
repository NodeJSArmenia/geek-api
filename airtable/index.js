import { base } from "../config/env.js";

const table = base("tblv5RDJcHsiFaBkn");
let geeksData;

const getGeeks = async () => {
  try {
    const geeks = await table.select().firstPage();
    const minifyedGeeks = geeks.map((geek) => {
      return minifyGeek(geek);
    });
    return minifyedGeeks;
  } catch (err) {
    console.error(err);
  }
};

const getGeekById = async (id) => {
  try {
    const geek = await table.find(id);
    return minifyGeek(geek);
  } catch (err) {
    console.error(err);
  }
};

const minifyGeek = async (geek) => {
  const {
    fields: { Keywords, Name, Websites },
  } = geek;

  return {
    keyWords: Keywords,
    name: Name,
    websites: await getGeekWebsites(Websites),
  };
};

const getGeekWebsites = async (id) => {
  if (!id) return;
  const { fields } = await table.find(id);
  delete fields.Geeks;
  delete fields.title;
  return fields;
};

export default {
  getGeeks,
  getGeekById,
  minifyGeek,
  geeksData,
};
