import { StatusCodes } from "http-status-codes";
import {
  createPostService,
  getPostByIdService,
  getPostByUserIdService,
  getPostService,
} from "../services/post.service.js";
import { createPostSchema } from "../schemas/post.schema.js";

export const getAllPostsController = async (req, res, next) => {
  try {
    const posts = await getPostService();
    res.status(StatusCodes.OK).json(posts);
  } catch (error) {
    next(error);
  }
};
export const createPostController = async (req, res, next) => {
  try {
    createPostSchema.parse(req.body);
    const posts = await createPostService(req.body, req.userId);
    res.status(StatusCodes.OK).json(posts);
  } catch (error) {
    next(error);
  }
};

export const getPostByIdController = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const data = await getPostByIdService(postId);
    res.status(StatusCodes.OK).json(data);
  } catch (error) {
    next(error);
  }
};

export const getPostByUserIdController = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const data = await getPostByUserIdService(userId);
    res.status(StatusCodes.OK).json(data);
  } catch (error) {
    next(error);
  }
};
