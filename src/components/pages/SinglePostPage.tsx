import { getPostById } from "@/lib/helpers/getPostById";
import type { post } from "@/lib/types/types";
import { SinglePostItem } from "../SinglePostItem";

type Params = Promise<{ id: string }>;

export default async function SinglePostPage({ params }: { params: Params }) {
  const { id } = await params;
  const post: post = await getPostById(id);

  return <SinglePostItem post={post} />;
}
