import express from "express";
import { deleteEventImage, eventImages, getEventImageById, getEventImages } from "../controllers/eventimagesController.js";
import upload from "../middlewares/upload.js";
import { allowRoles, tokenverify } from "../middlewares/auth.js";


const router = express.Router();

router.post("/add", tokenverify, allowRoles('admin'), upload.single("image"), eventImages);
router.get("/", getEventImages);
router.get("/:id", tokenverify, allowRoles('admin'), getEventImageById);
router.delete("/:id", tokenverify, allowRoles('admin'), deleteEventImage);

export default router;
