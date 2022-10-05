import "./config/env.js";
import express from "express";
import router from "./routes/router.js";
import airtable from "./airtable/airtable.js";

const app = express();
app.use(express.json());
app.use(router);

setInterval(airtable.sync, config.syncInterval);

// move to env config file -> const port = process.env.GEEKS_PORT || 3000;

(async () => {
  await airtable.sync();

  app.listen(config, () => {
    console.log(`Server has been listened on port ${port}`);
  });
})();
