import express from "express";
import contactFormSubmit from "../controllers/contactController.js";

const router = express.Router();

router.post('/contact', contactFormSubmit);

export default router;

