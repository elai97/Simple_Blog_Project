import { RequestHandler } from "express";

import { Posts } from "../models/post.models";

export const createPost: RequestHandler = async (req, res, next) => {
  const posts = await Posts.create({ ...req.body });
  return res
    .status(200)
    .json({ message: "Post created successfully", data: posts });
};

export const deletePost: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const deletedPost: Posts | null = await Posts.findByPk(id);
  await Posts.destroy({ where: { id } });
  return res
    .status(200)
    .json({ message: "Post deleted successfully.", data: deletedPost });
};

export const getAllPost: RequestHandler = async (req, res, next) => {
  const allPosts: Posts[] = await Posts.findAll();
  return res
    .status(200)
    .json({ message: "Post fetched successfully", data: allPosts });
};

export const getPostById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const posts: Posts | null = await Posts.findByPk(id);
  return res
    .status(200)
    .json({ message: "Post fetched successfully", data: posts });
};

export const updatePost: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  await Posts.update({ ...req.body }, { where: { id } });
  const updatedPosts: Posts | null = await Posts.findByPk(id);
  return res
    .status(200)
    .json({ message: "Post updated successfully", data: updatedPosts });
};