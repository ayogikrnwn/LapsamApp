import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ICDone from "../../assets/done.png";

const CardDetailSampah = ({
  imgLeft,
  imgCenter,
  imgRight,
  status,
  tanggal,
  title,
  alamat,
  namaPetugas,
}) => {
  let newStatus = {
    text: false,
    color: false,
  };

  if (status >= 0) {
    if (status === 0) {
      newStatus.text = "Belum Diangkut";
      newStatus.color = "red";
    } else if (status === 1) {
      newStatus.text = "Sedang Diangkut";
      newStatus.color = "#EAE509";
    } else if (status === 2) {
      newStatus.text = "Telah Diangkut";
      newStatus.color = "#5FD068";
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          // maxWidth: "70%",
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "black",
              fontSize: 18,
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
          {namaPetugas && (
            <Text
              style={{
                fontWeight: "200",
                color: "black",
                fontSize: 14,
                marginTop: 8,
              }}
            >
              Nama Petugas : {namaPetugas}
            </Text>
          )}
        </View>
        <View>
          <Text
            style={{
              fontWeight: "200",
              // color: newStatus.color,
              fontSize: 12,
              marginTop: 8,
              color: newStatus.color,
              textAlign: "center",
            }}
          >
            {status ? newStatus.text : "belum diangkut"}
          </Text>
          <View style={{ flexDirection: "row", marginTop: 9 }}>
            <Image source={imgLeft} style={{ width: 34, height: 34 }} />
            <Image source={imgCenter} style={{ width: 34, height: 34 }} />
            <Image source={imgRight} style={{ width: 34, height: 34 }} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardDetailSampah;

const styles = StyleSheet.create({});
