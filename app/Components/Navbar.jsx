


"use client";

import { useState, useEffect } from "react";
import LogoSvg from "./logoSvg";
import SearchBar from "./SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import Link from "next/link";

export default function Navbar() {
  const cart = useSelector((s) => s.cart.items);
  const auth = useSelector((s) => s.auth);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  // ✅ Track if we are on the client
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // only render after client mount
  }, []);

  const username = auth.userEmail ? auth.userEmail.split("@")[0] : "";

  // If not on client, render nothing to avoid hydration mismatch
  if (!isClient) return null;

  return (
    <div className="bg-white shadow p-4">
      <div className="flex justify-between items-center">
        <LogoSvg />

        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <div className="hidden md:flex gap-6 items-center">
          <SearchBar />

          <Link className="text-gray-500" href="/cart">
            Cart ({cart.length}) - $
            {cart.reduce((sum, i) => sum + i.price * i.qty, 0).toFixed(2)}
          </Link>

          {auth.isLoggedIn ? (
            <>
              <span className="font-semibold text-gray-600">{username}</span>
              <button
                onClick={() => dispatch(logout())}
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

      {open && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          <SearchBar />

          <Link href="/cart" className="text-gray-600">
            Cart ({cart.length})
          </Link>

          {auth.isLoggedIn ? (
            <>
              <span>{username}</span>
              <button
                onClick={() => dispatch(logout())}
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
