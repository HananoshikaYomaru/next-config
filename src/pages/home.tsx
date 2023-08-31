import { trpc } from "@/util";
import { publicConfig } from "@/publicConfig";
// import { serverConfig } from "@/serverConfig";

export default function About() {
  const { data } = trpc.id.useQuery();

  if (!data) {
    return <div></div>;
  }

  return (
    <div>
      <div>About: {JSON.stringify(data)}</div>
      <div>{publicConfig.id}</div>
      {/* <div>{serverConfig.secret} </div> */}
    </div>
  );
}
