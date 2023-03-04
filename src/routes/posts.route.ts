import { Router } from "express";

import {
  createPost,
  deletePost,
  getAllPost,
  updatePost,
  getPostById,
} from "../controllers/posts.controller";

const router = Router();

router.post("/", createPost);

router.get("/", getAllPost);

router.get("/:id", getPostById);

router.put("/:id", updatePost);

router.delete("/:id", deletePost);

export default router;