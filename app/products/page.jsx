// "use client";

// import Image from "next/image";

// import LogoSvg from "../Components/logoSvg";

// export default function Products () {
//     return(
//         <div className="flex justify-center bg-white ">
            
// <div>   
//     {/* <Image  src="/logo.png" width={200} height={20} alt="logo"/> */}
    
//     <LogoSvg/>
    
// </div>
//             </div>
//     )
// }


"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/app/redux/productSlice";
import ProductGrid from "@/app/Components/ProductGrid";
import SearchBar from "@/app/Components/SearchBar";
import CategoryFilter from "@/app/Components/CategoryFilter";
import LogoSvg from "@/app/Components/logoSvg";

export default function Products() {
  const dispatch = useDispatch();
  const { list } = useSelector((s) => s.products);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const categories = [...new Set(list.map((p) => p.category))];

  const filtered = list.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) &&
      (category ? p.category === category : true)
  );

  return (
    <div>
      <LogoSvg />

      <div className="flex gap-4 p-6">
        <SearchBar value={search} onChange={setSearch} />
        <CategoryFilter
          categories={categories}
          selected={category}
          onChange={setCategory}
        />
      </div>

      <ProductGrid products={filtered} />
    </div>
  );
}
