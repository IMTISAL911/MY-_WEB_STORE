"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import Navbar from "../Components/Navbar";
import ProductGrid from "../Components/ProductGrid";
import ProductGridSkeleton from "../Components/ProductGridSkeleton";

export default function Products() {
  const dispatch = useDispatch();
  const { filtered, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {status === "loading" && <ProductGridSkeleton />}
      {status === "success" && <ProductGrid products={filtered} />}
      {status === "failed" && (
        <p className="text-center text-red-500 p-6">
          Failed to load products
        </p>
      )}
    </div>
  );
}