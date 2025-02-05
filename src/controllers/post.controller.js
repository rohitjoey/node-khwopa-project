import { StatusCodes } from "http-status-codes";
import { getPostService } from "../services/post.service.js";

export const getAllPostsController = async (req, res, next) => {
  try {
    const posts = await getPostService();
    res.status(StatusCodes.OK).json(posts);
  } catch (error) {
    next(error);
  }
};
