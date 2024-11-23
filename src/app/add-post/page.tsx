import AddPostPage from "@/components/pages/AddPostPage";
import { ProtectedPage } from "@/lib/helpers/ProtectedPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create a New Post - Penny Post",
  description:
    "Share your stories and insights with the world by creating a new post on Penny Post.",
};

export default function page() {
  return (
    <ProtectedPage>
      <AddPostPage />
    </ProtectedPage>
  );
}
