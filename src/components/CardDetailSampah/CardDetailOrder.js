import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ILsampah from "../../assets/ftsmph.png";
import ButtonPrimary from "../Button/ButtonPrimary";

const CardDetailOrder = ({
  imgLeft,
  imgCenter,
  imgRight,
  status,
  onPress,
  title,
  tanggal,
  imageSampah,
}) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        width: "90  %",
        height: 220,
        borderRadius: 14,
        paddingHorizontal: 14,
        paddingVertical: 10,
        marginBottom: 10,
      }}
    >
      <Text style={{ fontWeight: "200", color: "black" }}>
        {tanggal || "08:17, 14 Juni 2022"}
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
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
          >
            Jl. Lorem Ipsum dolor si amet
          </Text>
          <Text
            style={{
              fontWeight: "200",
              color: "red",
              fontSize: 14,
              marginTop: 8,
            }}
          >
            Belum Diangkut
          </Text>
          <View style={{ flexDirection: "row", marginTop: 9 }}>
            <Image source={imgLeft} style={{ width: 34, height: 34 }} />
            <Image source={imgCenter} style={{ width: 34, height: 34 }} />
            <Image source={imgRight} style={{ width: 34, height: 34 }} />
          </View>
          <View style={{ marginTop: 15 }}>
            <ButtonPrimary title="Angkut" onPress={onPress} />
          </View>
        </View>

        <View>
          {/* {imageSampah ? (
            <Image source={{ uri: imageSampah }} />
          ) : (
            <Image source={ILsampah} />
          )} */}
          <Image source={ILsampah} />
          <Text
            style={{
              fontWeight: "200",
              color: "black",
              fontWeight: "bold",
              fontSize: 12,
              marginTop: 8,
              color: "black",
              textAlign: "center",
            }}
          >
            Lihat Foto
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardDetailOrder;

const styles = StyleSheet.create({});
