import Tag from "@/components/Tag";
import Image from "next/image";

export default function Home() {
  return (
    <div className="py-20 md:py-30 bg-linear-to-b from-neutral-950 to-neutral-800 text-white text-center">
      <p className="font-bold text-4xl mb-5">Test paragraph.</p>
      <p className="font-mono mb-5">roboto mono</p>
      <Tag />
    </div>
  );
}
