// node_modules
import express from "express";
import listController from "../controllers/list.controller.js";

const router = express();

router.get("/list", listController.getList);
router.post("/list", listController.addListItem);

export default router;
