import { z } from "zod";

export const PostSchema = z.object({
  // author: z.string().min(1, { message: "Author name is required" }),
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  imageUrl: z.string().url({ message: "Image URL must be a valid URL" }),
});

export type BlogPost = z.infer<typeof PostSchema>;
