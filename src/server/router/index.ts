import { createRouter } from "./context";
import superjson from "superjson";

import { guestBook } from "./guestBook";
import { authRouter } from "./auth";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("guestBook.", guestBook)
  .merge("auth.", authRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
