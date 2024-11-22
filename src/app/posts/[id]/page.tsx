import SinglePost from "@/components/pages/SinglePost";
import { getAllPosts } from "@/lib/helpers/getAllPosts";
import { post } from "@/lib/types/types";
import { notFound } from "next/navigation";

type Params = Promise<{ id: string }>;

export async function generateStaticParams() {
  const posts: post[] = await getAllPosts();
  if (!posts) return notFound();

  return posts.map((post) => ({ id: post.id }));
}

export default function page({ params }: { params: Params }) {
  return <SinglePost params={params} />;
}
