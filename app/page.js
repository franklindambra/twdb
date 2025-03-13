import Tag from "@/components/Tag";
import Image from "next/image";

export default function Home() {
  return (
    <div className="py-20 bg-linear-to-r from-cyan-500 to-blue-500 text-center">
      <p className="font-bold text-4xl mb-5">Test paragraph.</p>
      <p className="font-mono mb-5">roboto mono</p>
      <Tag />
    </div>
  );
}
