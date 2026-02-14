"use client";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity } from "@/app/redux/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((s) => s.cart.items);

  const total = items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  return (
    <div className="p-10">
      {items.map((i) => (
        <div key={i.id} className="flex justify-between mb-4">
          <h3>{i.title}</h3>
          <input
            type="number"
            value={i.quantity}
            onChange={(e) =>
              dispatch(updateQuantity({ id: i.id, quantity: +e.target.value }))
            }
            className="border w-16 text-center"
          />
          <p>${i.price * i.quantity}</p>
        </div>
      ))}

      <h2 className="text-2xl font-bold mt-6">Total: ${total.toFixed(2)}</h2>
    </div>
  );
}
