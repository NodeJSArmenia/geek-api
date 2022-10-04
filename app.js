import "./config/env.js";
import express from "express";
import router from "./routes/router.js";
import loadGeeks from "./airtable/load.geeks.js";
import upDateGeeks from "./airtable/update.geeks.js";

const app = express();
app.use(express.json());
app.use(router);

// AirTable functions.
loadGeeks();
upDateGeeks();
const port = process.env.GEEKS_PORT || 3000;
app.listen(port, () => {
  console.log(`Server has been listened on port ${port}`);
});
