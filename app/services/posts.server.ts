import type { Post } from "@prisma/client";
import { db } from "~/services/db.server";
export type { Post } from "@prisma/client";

export const getPosts = () => db.post.findMany();

export const createPost = ({ title, body }: Pick<Post, "title" | "body">) => {
  return db.post.create({
    data: {
      title,
      body,
    },
  });
};
