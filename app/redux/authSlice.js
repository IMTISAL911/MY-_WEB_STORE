// import { createSlice } from "@reduxjs/toolkit";

// const authSlice = createSlice({
//   name: "auth",
//   initialState: { isLoggedIn: false },
//   reducers: {
//     loginSuccess: (state) => {
//       state.isLoggedIn = true;
//     },
//     logout: (state) => {
//       state.isLoggedIn = false;
//     },
//   },
// });

// export const { loginSuccess, logout } = authSlice.actions;
// export default authSlice.reducer;

// app/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userEmail: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.userEmail = action.payload.userEmail;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.userEmail = null;
      state.isLoggedIn = false;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions; // ✅ Export actions
export default authSlice.reducer;
