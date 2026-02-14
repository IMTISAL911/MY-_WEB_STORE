"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchProductByIdApi } from "@/app/Services/api/productApi";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/cartSlice";

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductByIdApi(id).then(setProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-10 flex gap-10">
      <img src={product.image} className="w-64" />

      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-xl font-bold mt-2">${product.price}</p>

        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-orange-500 text-white px-6 py-3 rounded-xl mt-4"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
