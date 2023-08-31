import { publicProcedure, router } from "./trpc";
import { env } from "./env.mjs";
export const appRouter = router({
  id: publicProcedure.query(async () => {
    return env.SECRET;
  }),
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
