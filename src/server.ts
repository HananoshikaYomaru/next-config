import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  id: publicProcedure.query(async () => {
    return "this is the id of the project";
  }),
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
