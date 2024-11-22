import { API_URL } from "@/components/common/Constants";
import { post } from "../types/types";

export async function getAllPosts(): Promise<post[]> {
  try {
    const res = await fetch(API_URL);

    if (!res.ok) {
      console.error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
      throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to fetch posts");
  }
}
