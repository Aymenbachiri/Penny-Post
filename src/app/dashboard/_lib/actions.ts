"use server";
import "server-only";
import { API_URL } from "@/components/common/Constants";
import { getSession } from "@auth0/nextjs-auth0";
import { revalidatePath } from "next/cache";

export async function deletePost(formData: FormData) {
  const id = formData.get("id") as string;
  const { user } = await getSession();

  if (!user) {
    throw new Error("You are not logged in");
  }

  if (!id) {
    throw new Error("Post ID is required");
  }

  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to delete Post");
    }
    revalidatePath("/dashboard");
  } catch (error) {
    throw error;
  }
}

type UpdatePostParams = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  author: string;
};
export async function updatePost({
  id,
  title,
  description,
  imageUrl,
  author,
}: UpdatePostParams) {
  console.log("UpdatePost called with params:", {
    id,
    title,
    description,
    imageUrl,
  });

  const { user } = await getSession();
  if (!user) {
    console.error("User not logged in");
    return {
      success: false,
      message: "You are not logged in",
      error: "You are not logged in",
    };
  }

  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ title, description, imageUrl, author, id }),
    });

    console.log("API Response Status:", response.status);
    console.log("API Response Headers:", response.headers);

    if (!response.ok) {
      const errorData = await response.json();
      console.error("API error response:", errorData);
      throw new Error(errorData.message || "Failed to update Post");
    }

    console.log("Post updated successfully, revalidating path...");
    revalidatePath("/dashboard");

    return {
      success: true,
      message: "Post updated successfully",
    };
  } catch (error) {
    console.error("UpdatePost error:", error);
    return {
      success: false,
      message: "Failed to update Post",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
