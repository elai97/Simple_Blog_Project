import { RequestHandler } from 'express';

import { Posts } from '../models/post.models';

export const createPost: RequestHandler = async (req, res, next) => {
  try {
    const posts = await Posts.create({ ...req.body });
    return res.status(200).json({ message: 'Post created successfully', data: posts });
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred while creating the post', error });
  }
};

export const deletePost: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedPost = await Posts.findByPk(id);

    if (!deletedPost) {
      return res.status(404).json({ message: 'Post not found.' });
    }

    await Posts.destroy({ where: { id } });

    return res.status(200).json({ message: 'Post deleted successfully.', data: deletedPost });
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred while deleting the post.', error });
  }
};

export const getAllPost: RequestHandler = async (req, res, next) => {
  try {
    const allPosts: Posts[] = await Posts.findAll();
    return res.status(200).json({ message: 'Post(s) fetched successfully', data: allPosts });
  } catch (error) {
    return res.status(500).json({ message: 'Server Error', error });
  }
};

export const getPostById: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const posts: Posts | null = await Posts.findByPk(id);
    if (!posts) {
      return res.status(404).json({ message: 'Post not found' });
    }
    return res.status(200).json({ message: 'Post fetched successfully', data: posts });
  } catch (error) {
    return res.status(500).json({ message: 'Server Error' });
  }
};

export const updatePost: RequestHandler = async (req, res, next) => {
  const { id } = req.params;

  try {
    await Posts.update({ ...req.body }, { where: { id } });

    const updatedPost: Posts | null = await Posts.findByPk(id);

    return res.status(200).json({ message: 'Post updated successfully', data: updatedPost });
  } catch (error) {
    return res.status(500).json({ message: 'Error updating post', error });
  }
};
