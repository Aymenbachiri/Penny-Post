"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BlogPost, PostSchema } from "./postSchema";
import { API_URL } from "@/components/common/Constants";
import { toast } from "sonner";

export function AddNewPost() {
  console.log("AddNewPost hook initialized");
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BlogPost>({
    resolver: zodResolver(PostSchema),
  });

  const registerPost = async (data: BlogPost) => {
    console.log("Sending POST request to API with data:", data);
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
    console.log("POST request successful");
  };

  const onSubmit = async (data: BlogPost) => {
    console.log("onSubmit called with data:", data);
    console.log("User object:", user);

    const authorName = String(user?.name).trim();
    console.log("Author name length:", authorName.length);

    const postData = {
      title: data.title,
      description: data.description,
      imageUrl: data.imageUrl,
      author: authorName,
    };

    console.log("Post data before submission:", postData);

    setLoading(true);
    try {
      console.log("Submitting post...");
      await toast.promise(registerPost(postData), {
        loading: "Adding Post...",
        success: "Post added successfully!",
        error: (err: Error) => err.message || "Failed to add Post",
      });

      console.log("Post added successfully");
      reset();
    } catch (error) {
      console.error("Post addition error:", error);
      toast.error("An unexpected error occurred");
    } finally {
      setLoading(false);
      //router.push("/dashboard");
    }
  };

  console.log("Current errors:", errors);

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    loading,
    onSubmit,
  };
}
