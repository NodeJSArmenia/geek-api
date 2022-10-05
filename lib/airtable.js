import client from "../airtable/client.js";

export const getGeekWebsites = async (id) => {
  if (!id) return;
  const { fields } = await client.table.find(id);
  delete fields.Geeks;
  delete fields.title;
  return fields;
};
