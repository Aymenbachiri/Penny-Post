import { MyLink } from "@/components/common/MyLink";
import type { post } from "@/lib/types/types";
import { formatDate } from "@/lib/utils/utils";
import { DeletePostBtn } from "./DeletePostBtn";
import { EditPostModal } from "./EditPostModal";

type Props = {
  post: post;
  user: { name: string };
};

export function DashboardItem({ post, user }: Props) {
  const { createdAt, description, imageUrl, title, id } = post;

  return (
    <main className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="-m-4 flex flex-wrap">
          <div className="w-full p-4">
            <div className="h-[530px] overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 md:h-[430px]">
              <img
                className="w-full object-cover object-center md:h-36 lg:h-48"
                src={imageUrl}
                alt="blog"
              />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h1 className="title-font mb-3 text-lg font-medium text-gray-900 dark:text-white">
                    {title}
                  </h1>
                  <span className="dark:text-white">
                    {formatDate(createdAt)}
                  </span>
                </div>
                <p className="mb-3 leading-relaxed dark:text-gray-400">
                  {description.slice(0, 100)}...
                </p>
                <div className="flex flex-wrap items-center justify-between">
                  <MyLink
                    href={`/posts/${id}`}
                    className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0"
                  >
                    See More
                  </MyLink>
                  <section className="flex items-center justify-center gap-2">
                    <DeletePostBtn id={id} />
                    <EditPostModal post={post} user={user} />
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
