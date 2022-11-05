import express from "express";
import cors from "cors";
import morgan from "morgan";
import config from "./config/config.js";
import router from "./routes/router.js";
import store from "./store/store.js";

const { appConfig } = config;
const app = express();
// MiddleWares.
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));
app.use(express.json());
app.use(router);
// Handle Errors for Not Found Page.
app.get("*", (req, res) => {
  res.send("Not Found");
});

// App Configuration
const port = 3001;

setInterval(store.sync, appConfig.syncInterval);
(async () => {
  try {
    await store.sync();

    app.listen(port, () => {
      console.log(`Server has been listened on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
})();
