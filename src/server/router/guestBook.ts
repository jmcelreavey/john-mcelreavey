import { createRouter } from "./context";
import { createGuestBookEntrySchema } from "../../schema/guestBook";

export const guestBook = createRouter()
  .query("getBookEntries", {
    async resolve({ ctx }) {
      return await ctx.prisma.guestBook.findMany();
    },
  })
  .mutation("createEntry", {
    input: createGuestBookEntrySchema,
    async resolve({ input, ctx }) {
      const { name, content } = input;
      return await ctx.prisma.guestBook.create({
        data: {
          name: name && name.length > 0 ? name : undefined,
          content,
        },
      });
    },
  });
