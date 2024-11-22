import type { post } from "@/lib/types/types";
import { MyLink } from "./common/MyLink";
import { formatDate } from "@/lib/utils/utils";

export function PostItem({ post }: { post: post }) {
  return (
    <MyLink
      key={post.id}
      href={post.id}
      aria-label="Article"
      className="overflow-hidden rounded bg-white transition-shadow duration-300"
    >
      <section>
        <img
          src={
            post.imageUrl
              ? post.imageUrl
              : "https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
          }
          className="h-64 w-full rounded object-cover"
          alt={post.title || "post image"}
        />
      </section>
      <div className="py-5">
        <p className="mb-2 text-xs font-semibold uppercase text-gray-600">
          {formatDate(post.createdAt)}
        </p>
        <p className="hover:text-deep-purple-accent-700 mb-3 inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200">
          {post.title}
        </p>
        <p className="mb-4 text-gray-700">{post.description.slice(0, 200)}</p>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <section aria-label="Author" title="Author" className="mr-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="avatar"
                className="h-10 w-10 rounded-full object-cover shadow-sm"
              />
            </section>
            <section>
              <p className="hover:text-deep-purple-accent-400 font-semibold text-gray-800 transition-colors duration-200">
                {post.author}
              </p>
              <p className="text-sm font-medium leading-4 text-gray-600">
                Author
              </p>
            </section>
          </div>
        </div>
      </div>
    </MyLink>
  );
}
