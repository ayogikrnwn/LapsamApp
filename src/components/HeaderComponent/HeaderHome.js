import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ICLogo from "../../assets/bgMountain.png";
import ILPhoto from "../../assets/dummyphoto.png";
import { useSelector } from "react-redux";

const HeaderHome = ({ title }) => {
  // const dataUser = dummyDataUserMasyarakat;
  const selector = useSelector((state) => state.data);

  const { nama_masy, point } = selector.dataUser;
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
            Hi, {nama_masy}
          </Text>
          <Text style={{ fontSize: 14, color: "grey" }}>Selamat Siang</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "black" }}>
              Poin
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "black" }}>
              {" "}
              {point || 0}
            </Text>
          </View>
        </View>

        <Image source={ICLogo} />
      </View>
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  imgStyles: {
    borderWidth: 10,
    borderColor: "#5FD068",
    borderRadius: 80,
    marginLeft: 10,
    marginTop: -40,
  },
});
