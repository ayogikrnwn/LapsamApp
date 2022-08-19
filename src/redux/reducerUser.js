import { createSlice } from "@reduxjs/toolkit";
import { asyncStoreData } from "../utils";
import { asyncDataUser } from "./../utils/index";

export const user = createSlice({
  name: "counter",
  initialState: {
    user: [
      {
        id_petugas: 5,
        nama_petugas: "nanana",
        nik_petugas: "1739481209384",
        no_hp_petugas: "081384584848",
        jabatan: "Manager",
        alamat: "jl.rumbai",
        penempatan: "Rumbai Pesisir",
        username: "powered",
        password: "ranger",
        updated_at: "2022-08-18T18:56:35.000000Z",
        created_at: "2022-08-05T17:00:42.000000Z",
        token:
          "21a48538a2f70a7449924b5debdf1b238328d63b926811409be3fe53765a165f83941b0610c1beed",
      },
    ],
  },
  reducers: {
    userRegister: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userRegister } = user.actions;

export default user.reducer;
