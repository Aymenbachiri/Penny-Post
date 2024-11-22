import { getPostById } from "@/lib/helpers/getPostById";

type Params = Promise<{ id: string }>;

export default async function SinglePost({ params }: { params: Params }) {
  const { id } = await params;
  const post = await getPostById(id);

  return <div>{post.title}</div>;
}
