import { createRouter } from "./context";
import { z } from "zod";

export const blogRouter = createRouter()
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.blog.findMany();
    },
  })
  .mutation("create", {
    input: z.object({
      title: z.string(),
      content: z.string(),
    }),
    async resolve({ input, ctx }) {
      return await ctx.prisma.blog.create({
        data: input,
      });
    },
  });
