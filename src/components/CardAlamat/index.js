import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CardAlamat = ({ data }) => {
  let newData = {};
  if (data) {
    newData = data;
  }
  return (
    <View
      style={{
        backgroundColor: "white",
        width: "90%",
        height: 150,
        alignSelf: "center",
        marginTop: 20,
        padding: 16,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 14, color: "black" }}>
        {newData.tandai_sebagai || "Alamat Rumah"}
      </Text>
      <Text style={{ fontSize: 14, color: "black", marginTop: 10 }}>
        {newData.nama_alamat || "Yacob Andre"}
      </Text>
      <Text style={{ fontSize: 14, color: "black" }}>
        {newData.nomor_handphone || "08114442222"}
      </Text>
      <Text style={{ fontSize: 14, color: "black", marginTop: 10 }}>
        {newData.nama_jalan || "Jl. Lorem Ipsum"}{" "}
        {newData.kelurahan || "Kelurahan"} {newData.kecamatan || "kecamatan"}{" "}
        {newData.kota || "Kabupaten"} kode pos {newData.kode_pos || 45231}
      </Text>
    </View>
  );
};

export default CardAlamat;

const styles = StyleSheet.create({});
