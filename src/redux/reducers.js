import { createSlice } from "@reduxjs/toolkit";
import { asyncStoreData } from "../utils";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    image: "",
    dataUser: false,
    listSampah: false,
    listDummySampah: [],
    listAlamat: [],
    redemPoint: [],
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setDataUser: (state, action) => {
      state.dataUser = action.payload;
    },
    setDummySampah: (state, action) => {
      if (action.payload !== null && typeof action.payload === "object") {
        state.listDummySampah = action.payload;

        asyncStoreData("listDummySampah", action.payload);
      }
    },
    setListSampah: (state, action) => {
      state.listSampah = action.payload;
      // state.listSampah = action.payload.filter(
      //   (data) => data.id_masy === state.dataUser.id_masy
      // );
    },
    setListAlamat: (state, action) => {
      if (action.payload !== null && typeof action.payload === "object") {
        state.listAlamat = action.payload;
      }
    },
    setRedemPoint: (state, action) => {
      if (action.payload !== null && typeof action.payload === "object") {
        state.redemPoint = action.payload;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  setImage,
  setDataUser,
  setListSampah,
  setDummySampah,
  setListAlamat,
} = counterSlice.actions;

export default counterSlice.reducer;
