import express from "express";
import geeksRouter from "./geeks.router.js";
import groupsRouter from "./groups.router.js";

const router = express();
router.use(geeksRouter);
router.use(groupsRouter);

export default router;
