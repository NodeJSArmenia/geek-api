import client from "../airtable/client.js";

export const getGeekWebsites = async (id) => {
  if (!id) return;
  const { fields } = await client.table.find(id);
  delete fields.Geeks;
  delete fields.title;
  return fields;
};

export const mapGeeks = async (geek) => {
  const {
    fields: { Keywords, Name, Websites },
  } = geek;

  return {
    keyWords: Keywords,
    name: Name,
    websites: await getGeekWebsites(Websites),
  };
};
