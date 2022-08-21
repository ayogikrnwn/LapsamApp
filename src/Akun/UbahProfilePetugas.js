import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import InputText from "../Input/InputText";
import ButtonPrimary from "../components/Button/ButtonPrimary";
import { useSelector } from "react-redux";
const UbahProfilePetugas = ({ navigation }) => {
  const selector = useSelector((state) => state.data.dataUser);

  const { nama_petugas, no_hp_petugas, alamat } = selector;

  const [registerInput, setRegisterInput] = useState({});
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <HeaderComponent title="Ubah Profile" />
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ alignItems: "center", marginTop: 60 }}>
            <InputText
              disabled={true}
              value={nama_petugas}
              title="Nama"
              onChangeText={(e) =>
                setRegisterInput({
                  ...registerInput,
                  nama: e,
                })
              }
            />
            <InputText
              disabled={true}
              value={no_hp_petugas}
              title="Nomor Ponsel"
              onChangeText={(e) =>
                setRegisterInput({
                  ...registerInput,
                  emjail: e,
                })
              }
            />
            <InputText
              disabled={true}
              value={"-"}
              title="TPS"
              onChangeText={(e) =>
                setRegisterInput({
                  ...registerInput,
                  alamat: e,
                })
              }
            />
            <InputText
              disabled={true}
              value={alamat}
              title="Alamat"
              onChangeText={(e) =>
                setRegisterInput({
                  ...registerInput,
                  alamat: e,
                })
              }
            />
            <InputText
              disabled={true}
              value={"Mobil 1"}
              title="Jenis Kendaraan"
              onChangeText={(e) =>
                setRegisterInput({
                  ...registerInput,
                  alamat: e,
                })
              }
            />

            {/* <ButtonPrimary title="Simpan" onPress={handleRegister} /> */}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default UbahProfilePetugas;

const styles = StyleSheet.create({});
