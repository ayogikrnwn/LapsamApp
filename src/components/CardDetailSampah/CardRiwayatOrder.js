import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ICDone from "../../assets/done.png";

const CardRiwayatOrder = ({
  imgLeft,
  imgCenter,
  imgRight,
  status,
  alamat,
  title,
  tanggal,
}) => {
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
        Sampah Telah Diangkut
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
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
          <View style={{ alignItems: "center" }}>
            <Image source={imgLeft} style={{ width: 50, height: 50 }} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardRiwayatOrder;

const styles = StyleSheet.create({});
