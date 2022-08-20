import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import ICHome from "../../assets/home.png";
import ICEdit from "../../assets/Edit.png";
import ICPlus from "../../assets/Plus.png";
import ICPaper from "../../assets/Paper.png";
import ICSetting from "../../assets/Setting.png";

const TabItem = ({ title, active, onPress, onLongPress }) => {
  const Icon = () => {
    if (title == "Home") {
      return active ? (
        <Image source={ICHome} style={{ width: 20, height: 20 }} />
      ) : (
        <Image source={ICHome} style={{ width: 20, height: 20 }} />
      );
    }
    if (title == "Upload") {
      return active ? (
        <Image source={ICEdit} style={{ width: 20, height: 20 }} />
      ) : (
        <Image source={ICEdit} style={{ width: 20, height: 20 }} />
      );
    }
    if (title == "Masukan") {
      return active ? (
        <Image source={ICPlus} style={{ width: 20, height: 20 }} />
      ) : (
        <Image source={ICPlus} style={{ width: 20, height: 20 }} />
      );
    }
    if (title == "Riwayat") {
      return active ? (
        <Image source={ICPaper} style={{ width: 20, height: 20 }} />
      ) : (
        <Image source={ICPaper} style={{ width: 20, height: 20 }} />
      );
    }
    if (title == "Pengaturan") {
      return active ? (
        <Image source={ICSetting} style={{ width: 20, height: 20 }} />
      ) : (
        <Image source={ICSetting} style={{ width: 20, height: 20 }} />
      );
    }

    return <Icon name="area-chart" color="green" size={20} />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "space-between" },
  text: (active) => ({
    fontSize: 10,
    color: active ? "#B2A354" : "grey",

    marginTop: 4,
  }),
});
