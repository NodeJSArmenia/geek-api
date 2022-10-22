import express from "express";
import podcastController from "../controllers/podcast.controller.js";

const router = express();

router.get("/podcasts", podcastController.getPodcasts);

export default router;
