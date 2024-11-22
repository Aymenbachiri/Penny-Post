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
