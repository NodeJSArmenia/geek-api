import express from "express";
import geeksRouter from "./geeks.router.js";

const router = express();
router.use(geeksRouter);

export default router;
