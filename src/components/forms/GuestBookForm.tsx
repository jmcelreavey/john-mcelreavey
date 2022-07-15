import { trpc } from "../../utils/trpc";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateGuestBookEntryInput,
  createGuestBookEntrySchema,
} from "../../schema/guestBook";
import { useRouter } from "next/router";

type GuestBookFormProps = {
  onSuccess: () => void;
};
export const GuestBookForm = (props: GuestBookFormProps) => {
  const { onSuccess } = props;
  const router = useRouter();
  const { mutate, error } = trpc.useMutation(["guestBook.createEntry"], {
    onSuccess: () => {
      router.push(router.asPath);
      onSuccess();
    },
  });

  const { register, handleSubmit, reset } = useForm<CreateGuestBookEntryInput>({
    resolver: zodResolver(createGuestBookEntrySchema),
  });

  const onSubmit = ({ content, name }: CreateGuestBookEntryInput) => {
    mutate({ content, name });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {error?.message && <p>{error.message}</p>}
      <h1 className="font-bold underline underline-offset-2">
        Sign my Guestbook!
      </h1>
      <label className="label">
        <span className="label-text">What&apos;s your name:</span>
      </label>
      <input
        className="input input-bordered w-full"
        {...register("name")}
        placeholder="Anonymous"
      />
      <label className="label">
        <span className="label-text">Leave your message below:</span>
      </label>
      <textarea
        className="textarea textarea-bordered w-full"
        placeholder="...?"
        {...register("content")}
      ></textarea>
      <div className="text-right">
        <button className="btn btn-primary mt-4" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
