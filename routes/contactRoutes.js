import express from "express";
import  { contactFormSubmit, deleteContact, getContact } from "../controllers/contactController.js";
import { allowRoles, tokenverify } from "../middlewares/auth.js";

const router = express.Router();

router.post('/contact', contactFormSubmit);
router.get('/',tokenverify,allowRoles('admin'), getContact);
router.delete('/:id',tokenverify,allowRoles('admin'), deleteContact);

export default router;

