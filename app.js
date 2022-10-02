import "./config/env.js";
import express from "express";

const app = express();

const port = process.env.GEEKS_PORT || 3000;
app.listen(port, () => {
  console.log(`Server has been listened on port ${port}`);
});
