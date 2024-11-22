import { getSession } from "@auth0/nextjs-auth0";
import { DashboardItem } from "./DashboardItem";
import { getAllPosts } from "@/lib/helpers/getAllPosts";

export async function Dashboard() {
  const { user } = await getSession();
  const posts = await getAllPosts();
  const userPosts = posts.filter((post) => post.author === user?.name);

  if (userPosts.length === 0) {
    return (
      <div className="flex items-center justify-center">
        You have not created any posts yet.
      </div>
    );
  }
  return (
    <main className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {userPosts.map((post) => (
        <DashboardItem key={post.id} post={post} />
      ))}
    </main>
  );
}
