import express from "express";
import booksController from "../controllers/books.controller.js";

const router = express();

router.get("/books", booksController.getBooks);

export default router;
