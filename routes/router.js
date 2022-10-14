import express from "express";
import geeksRouter from "./geeks.router.js";
import groupsRouter from "./groups.router.js";
import booksRouter from "./books.router.js";

const router = express();
router.use(geeksRouter);
router.use(groupsRouter);
router.use(booksRouter);

export default router;
