import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import InputText from "../Input/InputText";
import ButtonPrimary from "../components/Button/ButtonPrimary";

const UbahProfilePetugas = ({ navigation }) => {
  const handleRegister = () => {
    alert("Ubah Data Berhasil");
    navigation.navigate("Home");
  };

  const [registerInput, setRegisterInput] = useState({});
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <HeaderComponent title="Ubah Profile" />
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ alignItems: "center", marginTop: 60 }}>
            <InputText
              title="Nama"
              onChangeText={(e) =>
                setRegisterInput({
                  ...registerInput,
                  nama: e,
                })
              }
            />
            <InputText
              title="Nomor Ponsel"
              onChangeText={(e) =>
                setRegisterInput({
                  ...registerInput,
                  emjail: e,
                })
              }
            />
            <InputText
              title="TPS"
              onChangeText={(e) =>
                setRegisterInput({
                  ...registerInput,
                  alamat: e,
                })
              }
            />
            <InputText
              title="Alamat"
              onChangeText={(e) =>
                setRegisterInput({
                  ...registerInput,
                  alamat: e,
                })
              }
            />
            <InputText
              title="Jenis Kendaraan"
              onChangeText={(e) =>
                setRegisterInput({
                  ...registerInput,
                  alamat: e,
                })
              }
            />

            <ButtonPrimary title="Simpan" onPress={handleRegister} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default UbahProfilePetugas;

const styles = StyleSheet.create({});
