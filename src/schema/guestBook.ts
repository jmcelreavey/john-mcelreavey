import z from "zod";

export const createGuestBookEntrySchema = z.object({
  content: z.string().min(1, "You can't just leave me a blank message!"),
  name: z.string().nullable(),
});

export type CreateGuestBookEntryInput = z.infer<
  typeof createGuestBookEntrySchema
>;
