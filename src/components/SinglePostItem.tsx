import type { post } from "@/lib/types/types";
import { formatDate } from "@/lib/utils/utils";

export function SinglePostItem({ post }: { post: post }) {
  const { author, createdAt, description, imageUrl, title } = post;

  return (
    <main className="relative mx-auto max-w-7xl p-5 pt-[15%] sm:p-10 md:p-16">
      <div
        className="mt-[10%] overflow-hidden bg-cover bg-center text-center"
        title={title}
        style={{
          minHeight: "500px",
          backgroundImage: `url(${
            imageUrl
              ? imageUrl
              : "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          })`,
        }}
      />
      <div className="mx-auto max-w-3xl">
        <div className="mt-3 flex flex-col justify-between rounded-md bg-white leading-normal">
          <div className="relative top-0 -mt-32 bg-white p-5 sm:p-10">
            <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-black">
              {title}
            </h1>
            <section className="flex items-center justify-between">
              <p className="mt-2 text-xs text-gray-700">
                Written By:{" "}
                <span className="font-medium text-indigo-600 transition duration-500 ease-in-out hover:text-gray-900 dark:text-black">
                  {author}
                </span>{" "}
              </p>
              <span className="dark:text-black">
                at : {formatDate(createdAt)}
              </span>
            </section>
            <p className="my-5 text-base leading-8 dark:text-black">
              {description}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
