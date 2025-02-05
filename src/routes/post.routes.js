import { Router } from "express";
import {
  createPostController,
  getAllPostsController,
} from "../controllers/post.controller.js";
import { authMiddleWare } from "../middleware/authMiddleware.js";

//api/posts
const postRouter = Router();

postRouter.route("/").get(authMiddleWare, getAllPostsController);
postRouter.post("/", authMiddleWare, createPostController);
// postRouter
//   .route("/:postId")
//   .get(getPostByIdController)
//   .patch(updatePostController)
//   .delete(deletePostController);

export default postRouter;
