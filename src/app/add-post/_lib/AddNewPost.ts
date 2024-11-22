"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BlogPost, PostSchema } from "./postSchema";
import { API_URL } from "@/components/common/Constants";
import { toast } from "sonner";

export function AddNewPost() {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BlogPost>({
    resolver: zodResolver(PostSchema),
  });

  const registerPost = async (data: BlogPost) => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error("Error response from API:", errorData);
      throw new Error(errorData.error || "Failed to add post");
    }
  };

  const onSubmit = async (data: BlogPost) => {
    const postData = {
      title: data.title,
      description: data.description,
      imageUrl: data.imageUrl,
      author: user?.name,
    };

    setLoading(true);
    try {
      await toast.promise(registerPost(postData), {
        loading: "Adding Post...",
        success: "Post added successfully!",
        error: (err: Error) => err.message || "Failed to add Post",
      });

      reset();
      setLoading(false);
    } catch (error) {
      console.error("Post addition error:", error);
      toast.error("An unexpected error occurred");
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    loading,
    onSubmit,
  };
}
