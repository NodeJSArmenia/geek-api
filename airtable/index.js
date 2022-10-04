import { base } from "../config/env.js";

const table = base("tblv5RDJcHsiFaBkn");
let geeksData;

const getGeeks = async () => {
  try {
    const geeks = await table.select().firstPage();
    const minifyGeeks = geeks.map((geek) => minifyGeek(geek));
    return minifyGeeks;
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

const minifyGeek = (geek) => {
  const { id, fields } = geek;
  return {
    id,
    fields,
  };
};

const upDateGeeks = async (geeks) => {
  const upDatedGeeks = await table.replace(geeks);
  console.log(upDatedGeeks);
};

export default {
  getGeeks,
  getGeekById,
  minifyGeek,
  upDateGeeks,
  geeksData,
};
