import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ILsampah from "../../assets/ftsmph.png";
import ButtonPrimary from "../Button/ButtonPrimary";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { listDummySampah, removeSampah } from "../../utils";
import { useDispatch } from "react-redux";

const CardDetailOrder = ({
  route,

  imgLeft,
  imgCenter,
  imgRight,
  status,
  onPress,
  title,
  tanggal,
  imageSampah,
  navigation,
  alamat,
  data,
}) => {
  const dispatch = useDispatch();
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
      newStatus.color = "green";
    }
  }

  return (
    <View
      style={{
        backgroundColor: "white",
        width: "100%",
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
      <View
        style={{
          // width: "70%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
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
            numberOfLines={2}
            ellipsizeMode="tail"
            style={{
              fontWeight: "200",
              color: "black",
              fontSize: 14,
              marginTop: 8,
            }}
          >
            {alamat || "Jl. Lorem Ipsum dolor si amet"}
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
          {imageSampah ? (
            <Image
              style={{
                width: "100%",
                height: 75,
                // backgroundColor: "lightblue",
                borderRadius: 10,
              }}
              source={{ uri: imageSampah }}
            />
          ) : (
            <Image source={ILsampah} />
          )}
          {/* <Image source={ILsampah} /> */}
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
          <Text
            style={{
              fontWeight: "200",
              color: newStatus.color ? newStatus.color : "red",
              fontSize: 14,
              marginTop: 8,
            }}
          >
            {newStatus.text ? newStatus.text : "Belum Diangkut"}
          </Text>
          {/* <TouchableOpacity
            onPress={async () => {
              removeSampah({ dataSampah: data, dispatch: dispatch });
            }}
          >
            <Text>Hapus</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};

export default CardDetailOrder;

const styles = StyleSheet.create({});
