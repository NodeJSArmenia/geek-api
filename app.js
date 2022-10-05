import "./config/env.js";
import { syncInterval, port } from "./config/env.js";
import express from "express";
import router from "./routes/router.js";
import airtable from "./airtable/airtable.js";

const app = express();
app.use(express.json());
app.use(router);
let i = 0;
setInterval(() => {
  airtable.sync();
  i++;
  console.log(i);
}, syncInterval);

(async () => {
  await airtable.read();
  let i = 0;

  app.listen(port, () => {
    console.log(`Server has been listened on port ${port}`);
  });
})();
