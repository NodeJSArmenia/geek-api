import express from "express";
import config from "./config/config.js";
import router from "./routes/router.js";
import store from "./store/store.js";

const app = express();
app.use(express.json());
app.use(router);

// setInterval(store.sync, config.appConfig.syncInterval);

(async () => {
  // await store.sync();
  await store.read();

  app.listen(config.appConfig.port, () => {
    console.log(`Server has been listened on port ${config.appConfig.port}`);
  });
})();
