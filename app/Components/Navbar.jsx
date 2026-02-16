// "use client";

// import { useState } from "react";
// import LogoSvg from "./logoSvg";
// import SearchBar from "./SearchBar";
// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../redux/authSlice";
// import Link from "next/link";

// export default function Navbar() {
//   const dispatch = useDispatch();
//   const cart = useSelector((s) => s.cart.items);
//   const auth = useSelector((s) => s.auth);
//   const [open, setOpen] = useState(false);

//   // Get username from email
//   const username = auth.userEmail ? auth.userEmail.split("@")[0] : "";

//   // Calculate total price
//   const totalPrice = cart
//     .reduce((sum, item) => sum + item.price * item.qty, 0)
//     .toFixed(2);

//   return (
//     <div className="bg-white shadow p-4">
//       {/* Desktop Navbar */}
//       <div className="flex justify-between items-center">
//         <LogoSvg />

//         {/* Mobile menu toggle */}
//         <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
//           ☰
//         </button>

//         {/* Desktop menu */}
//         <div className="hidden md:flex gap-6 items-center">
//           <SearchBar />

//           <Link href="/cart" className="font-semibold text-gray-700">
//             Cart ({cart.length}) - ${totalPrice}
//           </Link>

//           {auth.isLoggedIn ? (
//             <div className="flex items-center gap-3">
//               <span className="text-gray-700 font-medium">{username}</span>
//               <button
//                 onClick={() => dispatch(logout())}
//                 className="bg-red-500 text-white px-3 py-1 rounded-lg hover:opacity-90 transition"
//               >
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <Link
//               href="/login"
//               className="text-orange-500 font-semibold hover:underline"
//             >
//               Login
//             </Link>
//           )}
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {open && (
//         <div className="flex flex-col gap-4 mt-4 md:hidden border-t pt-4">
//           <SearchBar />

//           <Link href="/cart" className="text-gray-700 font-medium">
//             Cart ({cart.length}) - ${totalPrice}
//           </Link>

//           {auth.isLoggedIn ? (
//             <div className="flex flex-col gap-2">
//               <span className="text-gray-700 font-medium">{username}</span>
//               <button
//                 onClick={() => dispatch(logout())}
//                 className="bg-red-500 text-white px-3 py-2 rounded hover:opacity-90 transition"
//               >
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <Link
//               href="/login"
//               className="text-orange-500 font-semibold hover:underline"
//             >
//               LOGOUT
//             </Link>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }



"use client";
import { useState } from "react";
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

  const username = auth.userEmail ? auth.userEmail.split("@")[0] : "";

  return (
    <div className="bg-white shadow p-4">
      <div className="flex justify-between items-center">
        <LogoSvg />

        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <div className="hidden md:flex gap-6 items-center">
          <SearchBar />
          <Link href="/cart">
            Cart ({cart.length}) - $
            {cart.reduce((sum, i) => sum + i.price * i.qty, 0).toFixed(2)}
          </Link>

          {auth.isLoggedIn ? (
            <>
              <span className="font-semibold text-gray-600">
              {username}
              </span>
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
          <Link className="text-gray-600" href="/cart">
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
