

"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { fetchProductByIdApi } from "../../Services/api/productApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

export default function ProductDetail() {
  const { id } = useParams();
  const router = useRouter(); // ✅ Add router for navigation
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductByIdApi(id).then(setProduct);
  }, [id]);

  if (!product) return <p className="p-10">Loading...</p>;

  // ✅ Function to handle add to cart and redirect
  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Add product to Redux cart
    router.push("/cart");         // Redirect to cart page
  };

  return (
    <div className="p-10 grid md:grid-cols-2 gap-10 bg-gray-100 min-h-screen">

      <Image
        src={product.image}
        width={400}
        height={400}
        alt={product.title}
        unoptimized
        className="object-contain"
      />

      <div className="flex flex-col gap-6">
        <h1 className="text-3xl text-gray-600 font-bold">{product.title}</h1>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-2xl font-bold text-orange-600">
          ${product.price}
        </p>

        <button
          onClick={handleAddToCart} // ✅ Use new handler
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

