import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ICLogo from "../../assets/bgMountain.png";
import ILPhoto from "../../assets/dummyphoto.png";
import { useSelector } from "react-redux";

const HeaderHomePetugas = ({ title }) => {
  const selector = useSelector((state) => state.data);
  const { dataUser } = selector;

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
            Hi, {dataUser.nama_petugas}
          </Text>
          <Text style={{ fontSize: 14, color: "grey" }}>{dataUser.alamat}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "black" }}>
              Kendaraan :
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "black" }}>
              {" "}
              Mobil 1
            </Text>
          </View>
        </View>

        <Image source={ICLogo} />
      </View>
    </View>
  );
};

export default HeaderHomePetugas;

const styles = StyleSheet.create({
  imgStyles: {
    borderWidth: 10,
    borderColor: "#5FD068",
    borderRadius: 80,
    marginLeft: 10,
    marginTop: -40,
  },
});
