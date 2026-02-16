import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userEmail: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.userEmail = action.payload.userEmail;
      if (typeof window !== "undefined") {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", action.payload.userEmail);
      }
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userEmail = "";
      if (typeof window !== "undefined") {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userEmail");
      }
    },
    hydrateAuthFromStorage: (state) => {
      if (typeof window !== "undefined") {
        state.isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
        state.userEmail = localStorage.getItem("userEmail") || "";
      }
    },
  },
});

export const { loginSuccess, logout, hydrateAuthFromStorage } = authSlice.actions;
export default authSlice.reducer;
