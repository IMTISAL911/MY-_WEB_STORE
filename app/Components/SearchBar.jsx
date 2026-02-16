import { useDispatch } from "react-redux";
import { searchProducts } from "../redux/productSlice";

export default function SearchBar() {
  const dispatch = useDispatch();

  return (
    <input
      placeholder="Search products..."
      className="border p-2 rounded w-96 border-gray-400 placeholder-gray-500"
      onChange={(e) => dispatch(searchProducts(e.target.value))}
    />
  );
}
