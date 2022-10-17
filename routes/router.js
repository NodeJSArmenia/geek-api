import express from "express";
import geeksRouter from "./geeks.router.js";
import telegramGroupsRouter from "./telegram.groups.router.js";
import booksRouter from "./books.router.js";
import podcastRouter from "./podcasts.router.js";
import blogsRouter from "./blogs.router.js";

const router = express();
router.use(geeksRouter);
router.use(telegramGroupsRouter);
router.use(booksRouter);
router.use(podcastRouter);
router.use(blogsRouter);

export default router;
