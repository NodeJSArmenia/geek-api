import express from "express";
import blogsController from "../controllers/blogs.controller.js";

const router = express();

router.get("/blogs", blogsController.getBlogs);

export default router;
