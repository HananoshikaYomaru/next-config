import { publicConfig } from "@/publicConfig";
import { serverConfig } from "@/serverConfig";

export default function Home() {
  return (
    <div>
      <div>app router id: {publicConfig.id}</div>
      <div>{serverConfig.secret}</div>
    </div>
  );
}
