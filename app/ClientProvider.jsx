"use client";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { store } from "./redux/store";
import { hydrateAuthFromStorage } from "./redux/authSlice";
import { hydrateCart } from "./redux/cartSlice"; // ✅ updated

export default function ClientProvider({ children }) {
  return (
    <Provider store={store}>
      <HydrateState>{children}</HydrateState>
    </Provider>
  );
}

function HydrateState({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    // Hydrate auth
    const storedAuth = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("auth")) : null;
    if (storedAuth) dispatch(hydrateAuthFromStorage(storedAuth));

    // Hydrate cart
    const storedCart = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("cart")) : null;
    if (storedCart) dispatch(hydrateCart(storedCart));
  }, [dispatch]);

  return <>{children}</>;
}
