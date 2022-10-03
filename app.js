import "./config/env.js";
import express from "express";
import router from "./routes/router.js";

const app = express();

app.use(express.json());
app.use(router);

const port = process.env.GEEKS_PORT || 3000;
app.listen(port, () => {
  console.log(`Server has been listened on port ${port}`);
});
