// "use client";
// import { useSelector, useDispatch } from "react-redux";
// import { incrementQty, decrementQty, removeFromCart } from "../redux/cartSlice"; // ✅ fixed
// import Image from "next/image";

// export default function Cart() {
//   const cart = useSelector((s) => s.cart.items);
//   const dispatch = useDispatch();

//   const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0).toFixed(2);

//   if (!cart.length) return <p className="p-10">Cart is empty</p>;

//   return (
//     <div className="p-10">
//       {cart.map((item) => (
//         <div key={item.id} className="flex items-center gap-4 mb-4">

//           <Image 
//           src={item.image} 
//           width={80} 
//           height={80} 
//           alt={item.title}
//           unoptimized 
//           />

//           <div className="flex-1">
//             <p className="font-semibold">{item.title}</p>
//             <p>${item.price}</p>
//             <div className="flex gap-2 items-center mt-2">
//               <button
//                 onClick={() => dispatch(decrementQty(item.id))}
//                 className="px-2 py-1 bg-gray-300 rounded"
//               >
//                 -
//               </button>
//               <span>{item.qty}</span>
//               <button
//                 onClick={() => dispatch(incrementQty(item.id))}
//                 className="px-2 py-1 bg-gray-300 rounded"
//               >
//                 +
//               </button>
//             </div>
//           </div>
//           <button
//             onClick={() => dispatch(removeFromCart(item.id))}
//             className="px-2 py-1 bg-red-500 text-white rounded"
//           >
//             Remove
//           </button>
//         </div>
//       ))}

//       <h2 className="text-xl font-bold mt-6">Total: ${total}</h2>
//     </div>
//   );
// }




"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementQty, decrementQty, removeFromCart } from "../redux/cartSlice";
import Image from "next/image";

export default function Cart() {
  const cart = useSelector((s) => s.cart.items);
  const dispatch = useDispatch();

  // ✅ Track if we're on client
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Wait until client to render
  if (!isClient) return null;

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0).toFixed(2);

  if (!cart.length) return <p className="p-10">Cart is empty</p>;

  return (
    <div className="p-10">
      {cart.map((item) => (
        <div key={item.id} className="flex items-center gap-4 mb-4">

          <Image 
            src={item.image} 
            width={80} 
            height={80} 
            alt={item.title}
            unoptimized 
          />

          <div className="flex-1">
            <p className="font-semibold">{item.title}</p>
            <p>${item.price}</p>
            <div className="flex gap-2 items-center mt-2">
              <button
                onClick={() => dispatch(decrementQty(item.id))}
                className="px-2 py-1 bg-gray-300 rounded"
              >
                -
              </button>
              <span>{item.qty}</span>
              <button
                onClick={() => dispatch(incrementQty(item.id))}
                className="px-2 py-1 bg-gray-300 rounded"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="px-2 py-1 bg-red-500 text-white rounded"
          >
            Remove
          </button>
        </div>
      ))}

      <h2 className="text-xl font-bold mt-6">Total: ${total}</h2>
    </div>
  );
}
