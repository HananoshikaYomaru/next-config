import { getDictionary } from "../lang";

export default async function Page({
  params: { lang },
}: {
  params: { lang: "en" | "zh" };
}) {
  const dict = await getDictionary(lang); // en
  return <button>{dict.hello}</button>; // Add to Cart
}
