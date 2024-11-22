import NewPostForm from "@/app/add-post/_components/NewPostForm";

export default function AddPostPage() {
  return (
    <main className="m-auto my-10 max-w-3xl space-y-10 pt-[20%] md:pt-[10%]">
      <section className="space-y-5 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Share Your Thoughts with the World
        </h1>
        <p className="text-muted-foreground">
          Publish your blog post on Penny Post and engage with a growing
          community of readers.
        </p>
      </section>

      <div className="space-y-6 rounded-lg border p-4">
        <section>
          <h2 className="font-semibold">Create Your Blog Post</h2>
          <p className="text-muted-foreground">
            Write an informative and engaging post for your audience. Include a
            title, description, and any relevant images or media.
          </p>
        </section>
        <NewPostForm />
      </div>
    </main>
  );
}
