import { trpc } from "@/util";

export default function About() {
  const { data } = trpc.id.useQuery();
  return <div>About: {data} </div>;
}
