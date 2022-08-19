import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import InputText from "../Input/InputText";
import ButtonPrimary from "../components/Button/ButtonPrimary";

const TambahAlamat = ({ navigation }) => {
  const handleRegister = () => {
    alert("Simpan Data Berhasil");
    navigation.navigate("Home");
  };

  const [registerInput, setRegisterInput] = useState({});
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <HeaderComponent title="Tambah Alamat" />
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ alignItems: "center", marginTop: 60 }}>
            <InputText
              title="Tandai Sebagai Alamat"
              onChangeText={(e) =>
                setRegisterInput({
                  ...registerInput,
                  nama: e,
                })
              }
            />
            <InputText
              title="Nama Jalan"
              onChangeText={(e) =>
                setRegisterInput({
                  ...registerInput,
                  nama: e,
                })
              }
            />
            <InputText
              title="Kelurahan/Desa"
              onChangeText={(e) =>
                setRegisterInput({
                  ...registerInput,
                  emjail: e,
                })
              }
            />
            <InputText
              title="Kecamatan"
              onChangeText={(e) =>
                setRegisterInput({
                  ...registerInput,
                  alamat: e,
                })
              }
            />
            <InputText
              title="Kota/Kabupaten"
              onChangeText={(e) =>
                setRegisterInput({
                  ...registerInput,
                  alamat: e,
                })
              }
            />
            <InputText
              title="Kode Pos"
              onChangeText={(e) =>
                setRegisterInput({
                  ...registerInput,
                  alamat: e,
                })
              }
            />

            <InputText
              title="Nomor Handphone"
              secureText
              onChangeText={(e) =>
                setRegisterInput({
                  ...registerInput,
                  password: e,
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

export default TambahAlamat;

const styles = StyleSheet.create({});
