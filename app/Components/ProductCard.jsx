"use client";

import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-3 hover:shadow-lg transition">

      {/* Click card → open product detail */}
      {/* <Link href={`/PRODUCT/${product.id}`}> */}
      <Link href={`/product/${product.id}`}>

        <div className="cursor-pointer flex flex-col gap-2">
          <Image
            src={product.image}
            width={150}
            height={150}
            alt=""
            className="mx-auto h-40 object-contain"
          />

          <h3 className="font-semibold text-gray-800 line-clamp-2">
            {product.title}
          </h3>

          <p className="text-orange-600 font-bold">
            ${product.price}
          </p>
        </div>
      </Link>

      {/* Add to cart */}
      <button
        onClick={() => dispatch(addToCart(product))}
        className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg p-2 font-semibold"
      >
        Add to Cart
      </button>
    </div>
  );
}
