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
      {
        id_petugas_iuran: 3,
        nama_petugas: "Fajar",
        nik_petugas: "1739481209384",
        no_hp_petugas: "081384584848",
        jabatan: "Manager",
        alamat: "jl.rumbai",
        penempatan: "Rumbai Pesisir",
        username: "power",
        password: "ranger",
        updated_at: "2022-08-06T02:43:55.000000Z",
        created_at: "2022-08-06T02:36:46.000000Z",
        token:
          "a80e2b6182e76d325ec8c979c1b11b8f9e572dc774787a424ed812557db7939a96e6c8a3edfe1572",
        role: "petugas-iuran",
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
