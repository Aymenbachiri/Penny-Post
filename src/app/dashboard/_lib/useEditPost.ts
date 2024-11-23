import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PostFormData, updatePostSchema } from "./updatePostSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { updatePost } from "./actions";
import type { post } from "@/lib/types/types";

type useEditPostProps = {
  post: post;
  user: { name: string };
};
export function useEditPost({ post, user }: useEditPostProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PostFormData>({
    resolver: zodResolver(updatePostSchema),
    defaultValues: {
      id: post.id,
      title: post.title,
      description: post.description,
      imageUrl: post.imageUrl,
      author: user.name,
    },
  });

  const closeModal = () => {
    setIsOpen(false);
    reset();
  };

  useEffect(() => {
    if (isOpen) {
      reset({
        id: post.id,
        title: post.title,
        description: post.description,
        imageUrl: post.imageUrl,
        author: user.name,
      });
    }
  }, [isOpen, post, reset, user.name]);

  const onSubmit = async (data: PostFormData) => {
    await toast.promise(
      async () => {
        setIsLoading(true);
        try {
          const result = await updatePost(data);

          if (result.success) {
            closeModal();
          } else {
            throw new Error(result.error || "Failed to update post");
          }
        } catch (err) {
          console.error("Error while updating post:", err);
          throw err;
        } finally {
          setIsLoading(false);
        }
      },
      {
        loading: "Updating post...",
        success: "Post updated successfully",
        error: (err) => `Error: ${err.message || "Failed to update post"}`,
      },
    );
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isOpen,
    setIsOpen,
    isLoading,
    closeModal,
  };
}
