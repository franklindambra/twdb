import Tag from "@/components/Tag";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-40 mx-5">
      <p className="font-bold text-4xl mb-5">Test paragraph.</p>
      <p className="font-roboto-mono mb-5">roboto mono</p>
      <Tag />
    </div>
  );
}
