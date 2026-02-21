

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductsApi } from "../Services/api/productApi";

// fetch products with artificial 3s delay for ghost loader
export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async () => {
    const start = Date.now();
    const data = await fetchProductsApi();

    // calculate how much time passed
    const elapsed = Date.now() - start;
    const delay = 3000; // 3 seconds minimum
    if (elapsed < delay) {
      await new Promise((resolve) => setTimeout(resolve, delay - elapsed));
    }

    return data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    filtered: [],
    status: "idle",
    search: "",
    category: "all",
  },
  reducers: {
    searchProducts(state, action) {
      state.search = action.payload;
      state.filtered = state.list.filter((p) =>
        p.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    filterCategory(state, action) {
      state.category = action.payload;
      if (action.payload === "all") {
        state.filtered = state.list;
      } else {
        state.filtered = state.list.filter(
          (p) => p.category === action.payload
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.list = action.payload;
        state.filtered = action.payload;
        state.status = "success";
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { searchProducts, filterCategory } = productSlice.actions;
export default productSlice.reducer;