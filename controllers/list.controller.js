import airtable from "../airtable/index.js";

const getList = async (req, res) => {
  try {
    const records = await airtable.getRecords();
    res.json(records);
  } catch (err) {
    console.error(err);
  }
};

const getListItem = async (req, res) => {
  try {
    const id = req.params.id;
    const record = await airtable.getRecordById(id);
    if (!record) return res.sendStatus(404);
    res.json(record);
  } catch (err) {
    console.error(err);
  }
};

export default {
  getList,
  getListItem,
};
