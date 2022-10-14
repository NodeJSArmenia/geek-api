import express from "express";
import geeksRouter from "./geeks.router.js";
import groupsRouter from "./groups.router.js";
import booksRouter from "./books.router.js";
import podcastRouter from "./podcasts.router.js";
import blogsRouter from "./blogs.router.js";

const router = express();
router.use(geeksRouter);
router.use(groupsRouter);
router.use(booksRouter);
router.use(podcastRouter);
router.use(blogsRouter);

export default router;
