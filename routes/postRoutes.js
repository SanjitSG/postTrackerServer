import express from "express";
import {
  createPost,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
} from "../controllers/postController.js";
const router = express.Router();

// create post - read post - edit post - delete post

router.post("/add", createPost); // localhost:5000/posts/add
router.get("/", getAllPosts); // localhost:5000/posts
router.get("/:id", getSinglePost); // localhost:5000/:id
router.put("/:id", updatePost); // localhost:5000/:id
router.delete("/:id", deletePost); // localhost:5000/:id

export default router;
