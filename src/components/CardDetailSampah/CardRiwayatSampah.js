import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ICDone from "../../assets/done.png";

const CardRiwayatSampah = ({
  imgLeft,
  imgCenter,
  imgRight,
  status,
  title,
  alamat,
  namaPetugas,
  tanggal,
}) => {
  let newStatus = {
    text: false,
    color: "black",
  };
  if (status) {
    if (status === 0) {
      newStatus.text = "Belum Diangkut";
      newStatus.color = "red";
    } else if (status === 1) {
      newStatus.text = "Sedang Diangkut";
      newStatus.color = "#EAE509";
    } else if (status === 2) {
      newStatus.text = "Sampah Telah Diangkut";
      newStatus.color = "green";
    }
  }
  return (
    <View
      style={{
        backgroundColor: "white",
        width: "100%",
        height: 130,
        borderRadius: 14,
        paddingHorizontal: 14,
        paddingVertical: 10,
        marginBottom: 10,
      }}
    >
      <Text style={{ fontWeight: "200", color: "black" }}>
        {tanggal || "08:17, 14 Juni 2022"}
      </Text>
      <Text style={{ fontWeight: "200", color: "black", color: "#5FD068" }}>
        {newStatus.text || "Sampah Telah Diangkut"}
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              color: "black",
              fontSize: 16,
              marginTop: 8,
            }}
          >
            {title || "1 Kantong Plastik Kecil"}
          </Text>
          <Text
            style={{
              fontWeight: "200",
              color: "black",
              fontSize: 14,
              marginTop: 8,
            }}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {alamat || "Jl. Lorem Ipsum dolor si amet"}
          </Text>
        </View>
        <View>
          <View style={{ flexDirection: "row", marginTop: -14 }}>
            <Image source={imgLeft} style={{ width: 34, height: 34 }} />
            <Image source={imgCenter} style={{ width: 34, height: 34 }} />
            <Image source={imgRight} style={{ width: 34, height: 34 }} />
          </View>
          <Text style={{ fontWeight: "200", color: "black" }}>
            Petugas : {namaPetugas || "-"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardRiwayatSampah;

const styles = StyleSheet.create({});
