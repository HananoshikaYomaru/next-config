import { env } from "./env.mjs";

export const serverConfig = {
  secret: env.SECRET,
};
