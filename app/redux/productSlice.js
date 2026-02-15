  import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
  import { fetchProductsApi } from "../Services/api/productApi";

  export const fetchProducts = createAsyncThunk(
    "products/fetch",
    async () => {
      return await fetchProductsApi();
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
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.list = action.payload;
        state.filtered = action.payload;
        state.status = "success";
      });
    },
  });

  export const { searchProducts, filterCategory } = productSlice.actions;
  export default productSlice.reducer;
