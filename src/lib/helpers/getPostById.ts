import type { post } from "../types/types";
import { API_URL } from "./../../components/common/Constants";

export async function getPostById(id: string): Promise<post> {
  try {
    const res = await fetch(`${API_URL}/${id}`);

    if (!res.ok) {
      console.error(`Failed to fetch post: ${res.status} ${res.statusText}`);
      throw new Error(`Failed to fetch post: ${res.status} ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching post:", error);
    throw new Error("Failed to fetch post");
  }
}
