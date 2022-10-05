async function getMapedData(table, mapData) {
  try {
    const data = await table.select().firstPage();
    const mapedData = data.map((item) => mapData(item));
    return await Promise.all(mapedData);
  } catch (err) {
    console.error(err);
  }
}

export default {
  getMapedData,
};
