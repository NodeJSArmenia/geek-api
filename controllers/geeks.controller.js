import airtable from "../airtable/client.js";

const getGeeks = async (req, res) => {
  res.json(airtable.geeksData);
};

const getGeek = async (req, res) => {
  try {
    const id = req.params.id;
    const geek = await airtable.getGeekById(id);
    if (!geek) return res.sendStatus(404);
    res.json(geek);
  } catch (err) {
    console.error(err);
  }
};

export default {
  getGeeks,
  getGeek,
};