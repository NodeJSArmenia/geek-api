import express from "express";
import listRouter from "./list.router.js";

const router = express();
router.use(listRouter);

export default router;
