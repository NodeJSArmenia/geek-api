import airtable from "./index.js";

const upDateGeeks = async () => {
  try {
    setInterval(async () => {
      const upDatedGeeks = await airtable.getGeeks();
      airtable.geeksData = upDatedGeeks;
    }, 1000);
  } catch (err) {
    console.error(err);
  }
};

export default upDateGeeks;
