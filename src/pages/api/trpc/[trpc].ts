import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { appRouter } from "@/server";

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
