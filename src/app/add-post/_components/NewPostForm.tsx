"use client";

import { AddNewPost } from "../_lib/AddNewPost";
import { FormField } from "./FormField";
import { NewPostSubmitFormBtn } from "./NewPostSubmitFormBtn";

export default function NewPostForm() {
  const { register, handleSubmit, errors, loading } = AddNewPost();

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormField
        label="Post title"
        name="title"
        registration={register("title")}
        error={errors.title}
        placeholder="Enter the title of the post"
      />
      <FormField
        label="Description"
        type="textarea"
        name="description"
        placeholder="Enter the description of the post"
        registration={register("description")}
        error={errors.description}
      />
      <FormField
        label="Image URL"
        type="text"
        name="imageUrl"
        placeholder="Enter the URL of the image"
        registration={register("imageUrl")}
        error={errors.imageUrl}
      />

      <NewPostSubmitFormBtn loading={loading} />
    </form>
  );
}
