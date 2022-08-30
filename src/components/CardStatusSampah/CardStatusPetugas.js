import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const CardStatusSampah = ({ img, tanggal, alamat }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
      }}
    >
      <View>
        <Text numberOfLines={2} ellipsizeMode="tail" style={{ color: "white" }}>
          {alamat || "Jl. Lorem Ipsum II"}
        </Text>
        <View style={{ flexDirection: "row" }}>
          {/* <Text>Selesai - </Text> */}
          <Text>{tanggal || "12.00 WIB - 11 Juli 2022"}</Text>
          {/* <Text>12.00 WIB - 11 Juli 2022</Text> */}
        </View>
      </View>

      <View>
        <Image source={img} style={{ width: 40, height: 40 }} />
      </View>
    </View>
  );
};

export default CardStatusSampah;

const styles = StyleSheet.create({});
