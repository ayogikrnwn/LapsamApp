import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ICLengkap from "../assets/right.png";
import HeaderHomeIuran from "../components/HeaderComponent/HeaderHomeIuran";
import CardPembayaran from "../components/CardPembayaran";
import InputTextSearch from "../Input/InputTextSearch";

const HomeIuran = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <HeaderHomeIuran />

      <View style={styles.wrapper}>
        <ScrollView>
          <Text style={styles.txtTgl}>11 Juli 2022</Text>

          <View style={{ paddingHorizontal: 20, marginTop: 40 }}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 20,
                color: "white",
              }}
            >
              Penukaran Poin
            </Text>

            <View style={{ marginTop: 24 }}>
              <View style={{ flexDirection: "row" }}>
                <InputTextSearch placeholder="Cari NIK" />
                <TouchableOpacity
                  style={{
                    width: 80,
                    height: 50,
                    borderRadius: 12,
                    backgroundColor: "white",
                    marginLeft: 20,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      marginTop: 15,
                      color: "green",
                    }}
                  >
                    Cari
                  </Text>
                </TouchableOpacity>
              </View>

              <CardPembayaran label="Terima" />
              <CardPembayaran label="Terima" />
              <CardPembayaran label="Terima" />
              <CardPembayaran label="Terima" />
              <CardPembayaran label="Terima" />
            </View>

            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 20,
                color: "white",
              }}
            >
              Iuran Tagihan
            </Text>

            <View style={{ marginTop: 24 }}>
              <CardPembayaran label="Sudah Bayar" />
              <CardPembayaran label="Sudah Bayar" />
            </View>

            <TouchableOpacity
              style={{ flexDirection: "row", marginTop: 10 }}
              onPress={() => navigation.navigate("Add")}
            >
              <Text>Lebih Lengkap</Text>
              <Image
                source={ICLengkap}
                style={{ width: 15, height: 15, marginTop: 5, marginLeft: 5 }}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeIuran;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#5FD068",
    height: "78%",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: -40,
  },
  imgStyles: {
    borderWidth: 10,
    borderColor: "white",
    borderRadius: 80,
    marginTop: -70,
    marginLeft: 10,
  },
  txtTgl: {
    fontWeight: "200",
    fontSize: 14,
    color: "black",
    alignSelf: "flex-end",
    marginRight: 16,
    marginTop: 10,
  },
  txtLight: { fontWeight: "bold", fontSize: 14, color: "white" },
});
