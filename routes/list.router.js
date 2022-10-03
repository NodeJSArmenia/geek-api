import express from "express";
import listController from "../controllers/list.controller.js";

const router = express();

router.get("/list", listController.getList);
router.get("/list/:id", listController.getListItem);

export default router;
