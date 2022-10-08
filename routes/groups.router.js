import express from "express";
import groupsController from "../controllers/groups.controller.js";

const router = express();

router.get("/groups", groupsController.getGroups);

export default router;
