"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/PRODUCT/${product.id}`)}
      className="bg-white shadow rounded-xl p-4 cursor-pointer hover:scale-105 transition"
    >
      <Image src={product.image} width={150} height={150} alt={product.title} />
      <h3 className="text-sm font-semibold mt-2">{product.title}</h3>
      <p className="text-orange-600 font-bold">${product.price}</p>
    </div>
  );
}
