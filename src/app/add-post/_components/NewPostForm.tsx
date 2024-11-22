"use client";

import { AddNewPost } from "../_lib/AddNewPost";
import { FormField } from "./FormField";
import { NewPostSubmitFormBtn } from "./NewPostSubmitFormBtn";

export default function NewPostForm() {
  const { register, handleSubmit, errors, loading } = AddNewPost();

  // Log when the component renders
  console.log("NewPostForm rendered");

  const a = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submit event triggered");

    // Log the registration method to ensure it's working
    console.log("Register function:", register);

    // Log the errors to see if there are validation issues
    console.log("Current errors:", errors);

    // Log the data being passed to handleSubmit
    handleSubmit((data) => {
      console.log("Form submitted with data:", data); // Log the data submitted to handleSubmit
    });
  };

  return (
    <form onSubmit={a} className="space-y-4">
      <FormField
        label="Post title"
        name="title"
        registration={register("title")}
        error={errors.title}
        placeholder="Enter the title of the post"
      />
      <FormField
        label="description"
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
      <NewPostSubmitFormBtn loading={loading} />
      <button type="submit">Submit</button>
    </form>
  );
}
