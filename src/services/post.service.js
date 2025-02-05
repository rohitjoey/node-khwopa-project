import { prisma } from "../db/index.js";

export const getPostService = async () => {
  const posts = await prisma.post.findMany();
  return posts;
};
