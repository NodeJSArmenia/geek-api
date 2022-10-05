import { getTableByToken } from "../lib/airtable.js";

async function getData(token) {
  try {
    const table = await getTableByToken(token);
    return await table.select().firstPage();
  } catch (err) {
    console.error(err);
  }
}

export default {
  getData,
};
