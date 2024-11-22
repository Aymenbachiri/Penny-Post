"use client";

import { useState, useEffect } from "react";
import { EditIcon } from "@/lib/icons/EditIcon";
import { toast } from "sonner";
import { updatePost } from "../_lib/actions";
import type { post } from "@/lib/types/types";
import { LoaderIcon } from "@/lib/icons/LoaderIcon";

interface EditPostModalProps {
  post: post;
  user: { name: string };
}

export function EditPostModal({ post, user }: EditPostModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [description, setDescription] = useState(post.description);
  const [imageUrl, setImageUrl] = useState(post.imageUrl);
  const [author] = useState(user.name);

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !isLoading) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = "hidden";

      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const updateData = {
      id: post.id,
      title,
      description,
      imageUrl,
      author,
    };

    console.log("Submitting form with data:", updateData);

    await toast.promise(
      async () => {
        setIsLoading(true);
        try {
          console.log("Calling updatePost...");
          const result = await updatePost(updateData);
          console.log("UpdatePost result:", result);

          if (result.success) {
            console.log("Post updated successfully, closing modal.");
            setIsOpen(false);
          } else {
            console.error("Failed to update post:", result.error);
            throw new Error(result.error || "Failed to update post");
          }
        } catch (err) {
          console.error("Error while updating post:", err);
          throw err;
        } finally {
          setIsLoading(false);
        }
      },
      {
        loading: "Updating post...",
        success: "Post updated successfully",
        error: (err) => `Error: ${err.message || "Failed to update post"}`,
      },
    );
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center text-sm leading-none text-gray-400"
      >
        <EditIcon />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 overflow-hidden bg-black bg-opacity-50"
          onClick={(e) => {
            if (e.target === e.currentTarget && !isLoading) setIsOpen(false);
          }}
          aria-modal="true"
          role="dialog"
        >
          <div className="flex min-h-full items-center justify-center p-4">
            <div
              className="relative w-full max-w-7xl rounded-lg bg-white p-6 shadow-xl dark:bg-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="mb-4 text-xl font-bold dark:text-white">
                Edit Post
              </h2>

              <button
                onClick={() => setIsOpen(false)}
                disabled={isLoading}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:text-gray-300"
                aria-label="Close modal"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="author" id="author" value={author} />
                <input type="hidden" name="id" id="id" value={post.id} />

                <div>
                  <label
                    htmlFor="title"
                    className="mb-2 block text-sm font-medium dark:text-gray-300"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full rounded-md border px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    required
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="mb-2 block text-sm font-medium dark:text-gray-300"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="block h-48 w-full resize-none rounded-md border px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    required
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label
                    htmlFor="imageUrl"
                    className="mb-2 block text-sm font-medium dark:text-gray-300"
                  >
                    Image URL
                  </label>
                  <input
                    type="url"
                    id="imageUrl"
                    name="imageUrl"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="w-full rounded-md border px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    required
                    disabled={isLoading}
                  />
                </div>

                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    disabled={isLoading}
                    className="rounded-md bg-gray-200 px-4 py-2 hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-600 dark:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-2">
                        <LoaderIcon />
                        Updating...
                      </div>
                    ) : (
                      "Update Post"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
