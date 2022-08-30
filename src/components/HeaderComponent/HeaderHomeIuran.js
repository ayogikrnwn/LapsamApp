import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ICLogo from "../../assets/bgMountain.png";
import ILPhoto from "../../assets/dummyphoto.png";

const HeaderHomeIuran = ({ title, user }) => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 30,
        marginRight: -30,
        justifyContent: "center",
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Image source={ILPhoto} style={styles.imgStyles} />
        </View>
        <View>
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "black" }}>
            Hi, {user.nama_petugas || "User"}
          </Text>
          <Text style={{ fontSize: 14, color: "grey" }}>Selamat Siang</Text>
        </View>

        <Image source={ICLogo} />
      </View>
    </View>
  );
};

export default HeaderHomeIuran;

const styles = StyleSheet.create({
  imgStyles: {
    borderWidth: 10,
    borderColor: "#5FD068",
    borderRadius: 80,
    marginLeft: 10,
    marginTop: -40,
  },
});
