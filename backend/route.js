import express from "express";
import { getAllBooks } from "./controller.js";

const router = express.Router();

router.get("/api/books", getAllBooks);

export default router;
