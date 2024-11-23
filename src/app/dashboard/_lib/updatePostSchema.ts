import { z } from "zod";

export const updatePostSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),

  imageUrl: z
    .string()
    .url("Please enter a valid URL")
    .min(1, "Image URL is required"),
  author: z.string(),
});

export type PostFormData = z.infer<typeof updatePostSchema>;
