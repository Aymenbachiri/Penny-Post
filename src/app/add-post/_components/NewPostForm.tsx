"use client";

import { AddNewPost } from "../_lib/AddNewPost";
import { FormField } from "./FormField";
import { NewPostSubmitFormBtn } from "./NewPostSubmitFormBtn";

export default function NewPostForm() {
  const { register, handleSubmit, errors, loading } = AddNewPost();

  // Log when the component renders
  console.log("NewPostForm rendered");

  // Set the author field dynamically based on user.name

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
        type="text"
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
      {/* <FormField
        label="Author"
        type="text"
        name="author"
        placeholder="Enter the author name"
        registration={register("author")}
        error={errors.author}
        readOnly // Make the author field read-only if you don't want it to be editable
      /> */}
      <NewPostSubmitFormBtn loading={loading} />
      <button type="submit">Submit</button>
    </form>
  );
}
