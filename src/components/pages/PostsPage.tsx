import Posts from "../Posts";

export default function PostsPage() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col items-center justify-center pt-[10%]">
      <section className="px-4 text-center sm:px-8 lg:px-16">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
          Welcome to Penny Post
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Discover insightful articles, inspiring stories, and the latest trends
          in blogging and content creation. Dive into a world of knowledge with
          our expertly curated posts, designed to spark your creativity and fuel
          your passion for writing.
        </p>
      </section>
      <Posts />
    </main>
  );
}
