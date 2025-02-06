import { Router } from "express";
import {
  createPostController,
  getAllPostsController,
  getPostByIdController,
  getPostByUserIdController,
} from "../controllers/post.controller.js";
import { authMiddleWare } from "../middleware/authMiddleware.js";

//api/posts
const postRouter = Router();

postRouter.route("/").get(authMiddleWare, getAllPostsController);
postRouter.post("/", authMiddleWare, createPostController);
postRouter
  .route("/:postId")
  .get(authMiddleWare,getPostByIdController)
//   .patch(updatePostController)
//   .delete(deletePostController);

postRouter.get("/user/:userId", authMiddleWare, getPostByUserIdController);

export default postRouter;
