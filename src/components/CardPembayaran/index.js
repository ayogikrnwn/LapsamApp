import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CardPembayaran = ({
  user,
  img,
  label,
  alamat,
  nik,
  onClickButton,
  color,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <View>
          <Text style={{ color: "white" }}>{user || "Lorem Ipsum II"}</Text>
          <View>
            <Text style={{ color: "white" }}>
              {alamat || "Jl. Lorem Ipsum 1"}{" "}
            </Text>
            <Text style={{ color: "white" }}>{nik || "Rp 100.000"}</Text>
          </View>
        </View>
        <View
          style={{
            width: 150,
            height: 50,
            backgroundColor: "white",
            borderRadius: 30,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              if (onClickButton) {
                onClickButton();
              }
            }}
          >
            <Text
              style={{
                textAlign: "center",
                marginTop: 13,
                fontWeight: "bold",
                color: color || "green",
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Image source={img} style={{ width: 40, height: 40 }} />
      </View>
    </View>
  );
};

export default CardPembayaran;

const styles = StyleSheet.create({});
