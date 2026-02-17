import { createSlice } from "@reduxjs/toolkit";

const getCartKey = (email) => `cart_${email}`;

const loadCart = (email) => {
  if (typeof window === "undefined" || !email) return [];
  const data = localStorage.getItem(getCartKey(email));
  return data ? JSON.parse(data) : [];
};

const saveCart = (email, items) => {
  if (typeof window === "undefined" || !email) return;
  localStorage.setItem(getCartKey(email), JSON.stringify(items));
};

const initialState = {
  items: [],
  userEmail: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    hydrateCart: (state, action) => {
      const email = action.payload;
      state.userEmail = email;
      state.items = loadCart(email);
    },

    clearCart: (state) => {
      state.items = [];
      state.userEmail = "";
    },

    addToCart: (state, action) => {
      const existing = state.items.find(i => i.id === action.payload.id);
      if (existing) existing.qty += 1;
      else state.items.push({ ...action.payload, qty: 1 });

      saveCart(state.userEmail, state.items);
    },

    incrementQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.qty += 1;
      saveCart(state.userEmail, state.items);
    },

    decrementQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.qty > 1) item.qty -= 1;
      saveCart(state.userEmail, state.items);
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
      saveCart(state.userEmail, state.items);
    },
  },
});

export const {
  addToCart,
  incrementQty,
  decrementQty,
  removeFromCart,
  hydrateCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
