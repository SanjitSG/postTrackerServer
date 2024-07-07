import express from "express";
import { createUser, getAllUsers } from "../controllers/userController.js";

const router = express.Router();
//localhost:5000/users/add
router.post("/add", createUser);
//localhost:5000/users/
router.get("/", getAllUsers);

export default router;
