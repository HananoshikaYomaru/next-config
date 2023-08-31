import { publicProcedure, router } from "./trpc";
import { serverConfig } from "./serverConfig";
import { publicConfig } from "./publicConfig";
export const appRouter = router({
  id: publicProcedure.query(async () => {
    return {
      id: publicConfig.id,
      secret: serverConfig.secret,
    };
  }),
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
