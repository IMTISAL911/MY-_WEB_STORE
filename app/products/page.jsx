"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import Navbar from "../Components/Navbar";
import ProductGrid from "../Components/ProductGrid";
import Loader from "../Components/Loader";

export default function Products() {
  const dispatch = useDispatch();
  const { filtered, status } = useSelector(s => s.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      {status !== "success"
        ? <Loader />
        : <ProductGrid products={filtered} />}
    </div>
  );
}
