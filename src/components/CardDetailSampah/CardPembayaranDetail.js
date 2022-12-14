import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ICDone from "../../assets/done.png";

const CardPembayaranDetail = ({
  imgLeft,
  onPress,
  imgCenter,
  imgRight,
  status,
  alamat,
  user,
  nik,
  label,
  color,
}) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        // width: "90  %",
        // height: 130,
        borderRadius: 14,
        paddingHorizontal: 14,
        paddingVertical: 10,
        marginBottom: 10,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              color: "black",
              fontSize: 18,
              // marginTop: 8,
            }}
          >
            {user || "Yacob"}
          </Text>
          <Text
            style={{
              fontWeight: "200",
              color: "black",
              fontSize: 14,
              marginTop: 8,
            }}
          >
            {alamat || "Jl. Lorem Ipsum dolor si amet"}
          </Text>
          <Text
            style={{
              fontWeight: "200",
              color: "black",
              fontSize: 14,
              marginTop: 8,
              fontWeight: "bold",
            }}
          >
            {nik || "Rp 100.000"}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontWeight: "200",
              color: "black",
              fontSize: 12,
              marginTop: 8,
              color: "#5FD068",
              textAlign: "center",
            }}
          >
            {status}
          </Text>
          <View style={{ flexDirection: "row", marginTop: 9 }}>
            <TouchableOpacity
              style={{
                minWidth: 120,
                height: 50,
                backgroundColor: "white",
                borderRadius: 30,
                borderWidth: 1,
                borderColor: color || "green",
              }}
              onPress={onPress}
            >
              <Text
                style={{
                  textAlign: "center",
                  marginTop: 13,
                  fontWeight: "bold",
                  // color: "blue",
                  color: color || "green",
                }}
              >
                {label || "Sudah Dibayar"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardPembayaranDetail;

const styles = StyleSheet.create({});
