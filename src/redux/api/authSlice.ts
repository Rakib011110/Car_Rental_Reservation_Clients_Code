import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: any | null;
  token: string | null;
}

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem("authUser") || "null"),
  token: localStorage.getItem("authToken") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ user: any; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      // Save token and user to localStorage
      localStorage.setItem("authToken", action.payload.token);
      localStorage.setItem("authUser", JSON.stringify(action.payload.user));
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      // Remove token and user from localStorage
      localStorage.removeItem("authToken");
      localStorage.removeItem("authUser");
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
