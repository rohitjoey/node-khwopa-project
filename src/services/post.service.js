import { prisma } from "../db/index.js";

export const getPostService = async () => {
  const posts = await prisma.post.findMany();
  return posts;
};

export const createPostService = async (postData, userId) => {
  const posts = await prisma.post.create({
    data: {
      content: postData.content,
      userId: userId,
    },
  });
  return posts;
};

export const getPostByIdService = async (postId) => {
  const post = await prisma.post.findUnique({ where: { id: postId } });
  if (!post) {
    throw new Error("Not Found", { cause: "NotFoundCustomError" });
  }
  return post;
};

export const getPostByUserIdService =async  (userId)=>{
  const posts = await prisma.post.findMany({ where: { userId } });
  if (!posts) {
    throw new Error("Not Found", { cause: "NotFoundCustomError" });
  }
  return posts;
}
