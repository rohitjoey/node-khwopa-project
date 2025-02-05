import { Router } from "express";
import { getAllPostsController } from "../controllers/post.controller.js";

//api/posts
const postRouter = Router();

postRouter.route("/").get(getAllPostsController);

// .post(createPostController);
// postRouter
//   .route("/:postId")
//   .get(getPostByIdController)
//   .patch(updatePostController)
//   .delete(deletePostController);

export default postRouter;
