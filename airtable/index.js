import "../config/env.js";
import airtable from "airtable";
airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
  endpointUrl: "https://api.airtable.com",
});
const base = airtable.base("appsHMdNO7YjRsb8V");

const table = base("tblv5RDJcHsiFaBkn");

const getRecords = async () => {
  try {
    const records = await table.select().firstPage();
    const minifyRecords = records.map((record) => minifyRecord(record));
    return minifyRecords;
  } catch (err) {
    console.error(err);
  }
};

const getRecordById = async (id) => {
  try {
    const record = await table.find(id);
    return minifyRecord(record);
  } catch (err) {
    console.error(err);
  }
};

const minifyRecord = (record) => {
  return {
    id: record.id,
    fieds: record.fields,
    createdTime: record.createdTime,
  };
};

export default {
  getRecords,
  getRecordById,
  minifyRecord,
};
