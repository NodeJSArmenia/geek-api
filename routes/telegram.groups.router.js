import express from "express";
import telegramGroupsController from "../controllers/telegram.groups.controller.js";

const router = express();

router.get("/telegram-groups", telegramGroupsController.getTelegramGroups);

export default router;
