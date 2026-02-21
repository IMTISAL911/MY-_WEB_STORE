

"use client";

import { useState, useEffect } from "react";
import LogoSvg from "./logoSvg";
import SearchBar from "./SearchBar";
import { useSelector, useDispatch } from "react-redux";
import {
  logout,
  hydrateAuthFromStorage,
} from "../redux/authSlice";
import {
  clearCart,
  hydrateCart,
} from "../redux/cartSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const cart = useSelector((s) => s.cart.items);
  const auth = useSelector((s) => s.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const username = auth.userEmail
    ? auth.userEmail.split("@")[0]
    : "";

  // ✅ HYDRATE AUTH + CART AFTER MOUNT (🔥 MOST IMPORTANT)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem("auth");
    if (!stored) return;

    const parsed = JSON.parse(stored);

    dispatch(hydrateAuthFromStorage(parsed));

    if (parsed.userEmail) {
      dispatch(hydrateCart(parsed.userEmail));
    }
  }, [dispatch]);

  // ✅ PROFESSIONAL logout handler
  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    setOpen(false);
    router.push("/login");
  };

  const total = cart
    .reduce((sum, i) => sum + i.price * i.qty, 0)
    .toFixed(2);

  return (
    <div className="bg-white shadow p-4">
      <div className="flex justify-between items-center">
        <LogoSvg />

        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 items-center">
          <SearchBar />

          <Link className="text-gray-500" href="/cart">
            Cart ({cart.length}) - ${total}
          </Link>

          {auth.isLoggedIn ? (
            <>
              <span className="font-semibold text-gray-600">
                {username}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="text-orange-500 font-semibold">
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          <SearchBar />

          <Link href="/cart" className="text-gray-600">
            Cart ({cart.length}) - ${total}
          </Link>

          {auth.isLoggedIn ? (
            <>
              <span>{username}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white p-2 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="text-orange-500 font-semibold">
              Login
            </Link>
          )}
        </div>
      )}
    </div>
  );
}