import express from "express";
import geeksController from "../controllers/geeks.controller.js";

const router = express();

router.get("/geeks", geeksController.getGeeks);
router.get("/geeks/:id", geeksController.getGeek);

export default router;
