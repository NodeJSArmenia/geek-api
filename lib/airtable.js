

const getGeekWebsites = async (id) => {
  if (!id) return;
  const { fields } = await table.find(id);
  delete fields.Geeks;
  delete fields.title;
  return fields;
};

