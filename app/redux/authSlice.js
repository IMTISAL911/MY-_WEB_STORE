import { createSlice } from "@reduxjs/toolkit";

const storedAuth = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("auth")) : null;

const initialState = storedAuth || {
  isLoggedIn: false,
  userEmail: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.userEmail = action.payload.userEmail;
      localStorage.setItem("auth", JSON.stringify(state)); // persist
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userEmail = "";
      localStorage.removeItem("auth");
    },
    hydrateAuthFromStorage: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.userEmail = action.payload.userEmail;
    },
  },
});

export const { loginSuccess, logout, hydrateAuthFromStorage } = authSlice.actions;
export default authSlice.reducer;
