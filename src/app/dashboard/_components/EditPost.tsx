"use client";

import { EditIcon } from "@/lib/icons/EditIcon";
import type { post } from "@/lib/types/types";
import { useEditPost } from "../_lib/useEditPost";
import { EditPostModal } from "./EditPostModal";

type EditPostModalProps = {
  post: post;
  user: { name: string };
};

export function EditPost({ post, user }: EditPostModalProps) {
  const {
    register,
    handleSubmit,
    errors,
    isOpen,
    isLoading,
    setIsOpen,
    closeModal,
  } = useEditPost({ post, user });

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center text-sm leading-none text-gray-400"
      >
        <EditIcon />
      </button>

      {isOpen && (
        <EditPostModal
          register={register}
          errors={errors}
          closeModal={closeModal}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      )}
    </>
  );
}
