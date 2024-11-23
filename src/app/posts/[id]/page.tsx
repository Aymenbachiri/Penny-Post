import SinglePostPage from "@/components/pages/SinglePostPage";
import { getAllPosts } from "@/lib/helpers/getAllPosts";
import { getPostById } from "@/lib/helpers/getPostById";
import { post } from "@/lib/types/types";
import { notFound } from "next/navigation";

type Params = Promise<{ id: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { id } = await params;
  const post = await getPostById(id);

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams() {
  const posts: post[] = await getAllPosts();
  if (!posts) return notFound();

  return posts.map((post) => ({ id: post.id }));
}

export default function page({ params }: { params: Params }) {
  return <SinglePostPage params={params} />;
}
