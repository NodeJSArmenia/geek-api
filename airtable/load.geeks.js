import airtable from "./index.js";

const loadGeeks = async () => {
  try {
    const geeks = await airtable.getGeeks();
    airtable.geeksData = geeks;
    console.log("seted");
  } catch (err) {
    console.error(err);
  }
};

export default loadGeeks;
