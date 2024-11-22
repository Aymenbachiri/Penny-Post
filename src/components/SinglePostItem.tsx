import type { post } from "@/lib/types/types";
import { formatDate } from "@/lib/utils/utils";

export function SinglePostItem({ post }: { post: post }) {
  const { author, createdAt, description, imageUrl, title } = post;

  return (
    <main className="relative mx-auto max-w-7xl p-5 sm:p-10 md:p-16">
      {/* Hero Image */}
      <div
        className="mt-10 h-[500px] w-full rounded-md bg-cover bg-center shadow-md"
        title={title}
        style={{
          backgroundImage: `url(${
            imageUrl ||
            "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          })`,
        }}
      ></div>

      {/* Content Section */}
      <div className="mx-auto -mt-20 max-w-3xl rounded-md bg-white p-5 shadow-lg dark:bg-gray-900 sm:p-10">
        {/* Title */}
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h1>

        {/* Author and Date */}
        <section className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Written By :{" "}
            <span className="font-medium text-indigo-600 transition duration-500 hover:text-indigo-500 dark:text-indigo-400">
              {" "}
              {author}
            </span>
          </p>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {formatDate(createdAt)}
          </span>
        </section>

        {/* Description */}
        <p className="mt-6 text-base leading-relaxed text-gray-800 dark:text-gray-200">
          {description}
        </p>
      </div>
    </main>
  );
}
