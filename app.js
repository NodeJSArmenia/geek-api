import express from "express";
import cors from "cors";
import config from "./config/config.js";
import router from "./routes/router.js";
import store from "./store/store.js";

const { appConfig } = config;
const app = express();
// MiddleWares.
app.use(cors({ origin: "https://geek-api.onrender.com" }));
app.use(express.json());
app.use(router);

// App Configuration
const port = 3001;

setInterval(store.sync, appConfig.syncInterval);
(async () => {
  await store.sync();

  app.listen(port, () => {
    console.log(`Server has been listened on port ${port}`);
  });
})();
