
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   items: [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const existing = state.items.find(i => i.id === action.payload.id);
//       if (existing) {
//         existing.qty += 1;
//       } else {
//         state.items.push({ ...action.payload, qty: 1 });
//       }
//       if (typeof window !== "undefined") {
//         localStorage.setItem("cartItems", JSON.stringify(state.items));
//       }
//     },
//     removeFromCart: (state, action) => {
//       state.items = state.items.filter(i => i.id !== action.payload);
//       if (typeof window !== "undefined") {
//         localStorage.setItem("cartItems", JSON.stringify(state.items));
//       }
//     },
//     incrementQty: (state, action) => {
//       const item = state.items.find(i => i.id === action.payload);
//       if (item) item.qty += 1;
//       if (typeof window !== "undefined") {
//         localStorage.setItem("cartItems", JSON.stringify(state.items));
//       }
//     },
//     decrementQty: (state, action) => {
//       const item = state.items.find(i => i.id === action.payload);
//       if (item && item.qty > 1) item.qty -= 1;
//       if (typeof window !== "undefined") {
//         localStorage.setItem("cartItems", JSON.stringify(state.items));
//       }
//     },
//     hydrateCartFromStorage: (state) => {
//       if (typeof window !== "undefined") {
//         state.items = JSON.parse(localStorage.getItem("cartItems")) || [];
//       }
//     },
//     clearCart: (state) => {
//       state.items = [];
//       if (typeof window !== "undefined") {
//         localStorage.removeItem("cartItems");
//       }
//     },
//   },
// });

// export const {
//   addToCart,
//   removeFromCart,
//   incrementQty,
//   decrementQty,
//   hydrateCartFromStorage,
//   clearCart,
// } = cartSlice.actions;

// export default cartSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

// Read from localStorage safely
const storedCart = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("cart")) : null;

const initialState = {
  items: storedCart || [], // hydrate from localStorage if exists
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find(i => i.id === action.payload.id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.items)); // persist
    },
    incrementQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.qty += 1;
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    decrementQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.qty > 1) item.qty -= 1;
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    hydrateCart: (state, action) => {
      state.items = action.payload || [];
    },
  },
});

// Export actions
export const { addToCart, incrementQty, decrementQty, removeFromCart, hydrateCart } = cartSlice.actions;

export default cartSlice.reducer;
