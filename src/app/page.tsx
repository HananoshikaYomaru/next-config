import { publicConfig } from "@/publicConfig.mjs";
import { serverConfig } from "@/serverConfig.mjs";

export default function Home() {
  return (
    <div>
      <div className="text-yellow-500">app router id: {publicConfig.id}</div>
      <div>{serverConfig.secret}</div>
    </div>
  );
}
