import { createSlice } from "@reduxjs/toolkit";
import { asyncStoreData } from "../utils";
import { asyncDataUser } from "./../utils/index";

export const user = createSlice({
  name: "counter",
  initialState: {
    user: [],
  },
  reducers: {
    userRegister: (state, action) => {
      asyncStoreData("register", action.payload);
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userRegister } = user.actions;

export default user.reducer;
