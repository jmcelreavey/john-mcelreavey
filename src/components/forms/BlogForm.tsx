import { trpc } from "../../utils/trpc";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const BlogForm = () => {
  const blog = trpc.useMutation(["blog.create"]);

  const blogSchema = z.object({
    title: z.string().min(1, { message: "Required" }),
    content: z.string().min(1, { message: "Required" }),
  });

  type FormData = z.infer<typeof blogSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(blogSchema),
  });

  const onSubmit = ({ title, content }: { title: string; content: string }) => {
    blog.mutate({ title, content });
    reset();
  };

  return (
    <div className="container">
      <h1>Blog Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="label">
          <span className="label-text">Title of this entry?</span>
        </label>
        <input
          type="text"
          placeholder="Why the chicken ACTUALLY crossed the road..."
          className="input input-bordered w-full"
          {...register("title")}
        />
        {errors.title?.message && <p>{errors.title?.message}</p>}
        <label className="label">
          <span className="label-text">Content of this entry?</span>
        </label>
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="To get away from the..."
          {...register("content")}
        ></textarea>
        {errors.content?.message && <p>{errors.content?.message}</p>}
        <div>
          <button className="btn btn-primary mt-4" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
