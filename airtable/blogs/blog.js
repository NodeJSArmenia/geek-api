import config from "../../config/config.js";
import client from "../client.js";
import { mapBaseData } from "../../lib/airtable.js";

const { airtable_blogs_token } = config.airtableConfig;

const getBlogs = async () => {
  try {
    const blogs = await client.getTableByName(airtable_blogs_token);
    const mapedBlogs = blogs.map((item) => mapBaseData(item.fields));
    return mapedBlogs;
  } catch (err) {
    console.log(err);
  }
};

export default {
  getBlogs,
};
