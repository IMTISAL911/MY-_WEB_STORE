import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductsApi } from "@/app/Services/api/productApi";

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async () => await fetchProductsApi()
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    status: "idle",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.list = action.payload;
      });
  },
});

export default productSlice.reducer;
