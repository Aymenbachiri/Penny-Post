import { getAllPosts } from "@/lib/helpers/getAllPosts";
import { post } from "@/lib/types/types";
import { PostItem } from "./PostItem";

export default async function Posts() {
  const posts: post[] = await getAllPosts();

  return (
    <main className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <div className="grid gap-5 sm:mx-auto sm:max-w-sm lg:max-w-full lg:grid-cols-3">
        {posts.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </div>
    </main>
  );
}
