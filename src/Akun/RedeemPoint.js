import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import InputText from "../Input/InputText";
import ButtonPrimary from "../components/Button/ButtonPrimary";
import { useSelector } from "react-redux";

const RedeemPoint = ({ navigation }) => {
  const handleRegister = () => {
    alert("Ubah Data Berhasil");
    navigation.navigate("Home");
  };

  const selector = useSelector((state) => state.data.dataUser);

  const { point } = selector;
  // console.log("selector", selector);

  const [registerInput, setRegisterInput] = useState({});
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <HeaderComponent title="Redeem Point" />
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ alignItems: "center", marginTop: 40 }}>
            <Text style={{ fontSize: 20, color: "black", marginBottom: 10 }}>
              Poin Anda
            </Text>
            <Text style={{ fontSize: 20, color: "black", marginBottom: 10 }}>
              {point || "1520"}
            </Text>

            <ButtonPrimary title="Ajukan Tukarkan Poin" />
            <Text
              style={{
                fontSize: 14,
                color: "black",
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              Dengan mengklik tukar poin berarti anda mengajukan penukaran poin
              25 ribu poin untuk pembayaran iuran sampah 1bulan{" "}
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default RedeemPoint;

const styles = StyleSheet.create({});
