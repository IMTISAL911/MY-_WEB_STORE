"use client";

import { useState } from "react";
import LogoSvg from "./logoSvg";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function Navbar() {
  const cart = useSelector(s => s.cart.items);
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white shadow p-4">

      <div className="flex justify-between items-center">

        <LogoSvg />

        {/* Mobile button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <div className="hidden md:flex gap-6 items-center">
          <SearchBar />
          <Link href="/cart">Cart ({cart.length})</Link>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          <SearchBar />
          <Link href="/cart">Cart ({cart.length})</Link>
        </div>
      )}
    </div>
  );
}
