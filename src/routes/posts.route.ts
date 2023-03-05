import { authJwt } from '../middlewares';
import { Router } from "express";

import {
  createPost,
  deletePost,
  getAllPost,
  updatePost,
  getPostById,
} from "../controllers/posts.controller";

const postRouter = Router();

postRouter.post("/", authJwt.verifyToken, createPost);

postRouter.get("/", authJwt.verifyToken, getAllPost);

postRouter.get("/:id", authJwt.verifyToken, getPostById);

postRouter.patch("/:id", authJwt.verifyToken, updatePost);

postRouter.delete("/:id", authJwt.verifyToken, deletePost);

export default postRouter;