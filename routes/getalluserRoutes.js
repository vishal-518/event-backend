import express from "express";
import { deleteUser, getallUsers, getUserById } from "../controllers/userController.js";
import { allowRoles, tokenverify } from "../middlewares/auth.js";

const router = express.Router();

router.get('/',tokenverify,allowRoles('admin'),getallUsers)
router.get('/:id',tokenverify,allowRoles('admin'), getUserById)
router.delete('/:id',tokenverify,allowRoles('admin'), deleteUser)

export default router;