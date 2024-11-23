"use client";

import { LoaderIcon } from "@/lib/icons/LoaderIcon";
import type { FieldErrors, UseFormRegister } from "react-hook-form";

type EditPostModalProps = {
  register: UseFormRegister<{
    title: string;
    author: string;
    id: string;
    description: string;
    imageUrl: string;
  }>;
  handleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  errors: FieldErrors<{
    title: string;
    author: string;
    id: string;
    description: string;
    imageUrl: string;
  }>;
  isLoading: boolean;
  closeModal: () => void;
};

export function EditPostModal({
  register,
  handleSubmit,
  errors,
  isLoading,
  closeModal,
}: EditPostModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-black bg-opacity-50"
      onClick={(e) => {
        if (e.target === e.currentTarget && !isLoading) closeModal();
      }}
      aria-modal="true"
      role="dialog"
    >
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          className="relative w-full max-w-7xl rounded-lg bg-white p-6 shadow-xl dark:bg-gray-800"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="mb-4 text-xl font-bold dark:text-white">Edit Post</h2>

          <button
            onClick={closeModal}
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
            <input type="hidden" {...register("author")} />
            <input type="hidden" {...register("id")} />

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
                {...register("title")}
                className="w-full rounded-md border px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                disabled={isLoading}
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.title.message}
                </p>
              )}
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
                {...register("description")}
                className="block h-48 w-full resize-none rounded-md border px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                disabled={isLoading}
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.description.message}
                </p>
              )}
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
                {...register("imageUrl")}
                className="w-full rounded-md border px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                disabled={isLoading}
              />
              {errors.imageUrl && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.imageUrl.message}
                </p>
              )}
            </div>

            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={closeModal}
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
  );
}
