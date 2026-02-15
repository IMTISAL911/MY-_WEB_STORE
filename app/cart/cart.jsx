"use client";
import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty } from "../redux/cartSlice";

export default function Cart() {
  const { items } = useSelector(s => s.cart);
  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, i) => sum + i.price * i.qty,
    0
  );

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>

      {items.map(i => (
        <div key={i.id} className="flex justify-between p-4 border">
          <span>{i.title}</span>
          <div>
            <button onClick={() => dispatch(decreaseQty(i.id))}>-</button>
            {i.qty}
            <button onClick={() => dispatch(increaseQty(i.id))}>+</button>
          </div>
        </div>
      ))}

      <h2 className="text-xl font-bold mt-6">
        Total: ${total.toFixed(2)}
      </h2>
    </div>
  );
}
