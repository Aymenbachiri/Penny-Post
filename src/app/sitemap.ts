import { getAllPosts } from "@/lib/helpers/getAllPosts";
import { post } from "@/lib/types/types";
import type { MetadataRoute } from "next";
import { notFound } from "next/navigation";

const staticRoutes = [
  { path: "", lastModified: "2024-11-22T10:54:00.000Z" },
  { path: "/jobs/new", lastModified: "2024-11-22T10:54:00.000Z" },
  { path: "/signin", lastModified: "2024-11-22T10:54:00.000Z" },
  { path: "/signup", lastModified: "2024-11-22T10:54:00.000Z" },
];

async function fetchPostIds(): Promise<{ id: string }[]> {
  const posts: post[] = await getAllPosts();
  if (!posts) return notFound();

  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = staticRoutes.map((route) => ({
    url: `https://onejobs.vercel.app${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: "weekly" as const,
    priority: route.path === "" ? 1 : 0.8,
  }));

  const postIds = await fetchPostIds();

  const postRoutes = postIds.map(({ id }) => ({
    url: `https://oneposts.vercel.app/posts/${id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...routes, ...postRoutes];
}
