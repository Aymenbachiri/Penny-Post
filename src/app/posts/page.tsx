import PostsPage from "@/components/pages/PostsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Posts - Penny Post",
  description:
    "Browse through our extensive collection of blog posts on various topics and find your next favorite read.",
};

export default function page() {
  return <PostsPage />;
}
