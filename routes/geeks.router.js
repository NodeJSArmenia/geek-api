import express from "express";
import geeksController from "../controllers/geeks.controller.js";

const router = express();

router.get("/list", geeksController.getGeeks);
router.get("/list/:id", geeksController.getGeek);

export default router;
