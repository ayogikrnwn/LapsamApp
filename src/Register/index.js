import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import ICUnikom from "../assets/unikom.png";
import InputText from "../Input/InputText";
import ButtonPrimary from "../components/Button/ButtonPrimary";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import ICBassets from "../assets/backasset.png";
import ICLapsam from "../assets/logoLapSam.png";
import axios from "axios";
import APIUrl from "../config/APIUrl";

const Register = ({ navigation }) => {
  const [registerInput, setRegisterInput] = useState({});
  //     console.log(loginInput);

  const handleRegister = () => {
    // navigation.navigate("Home");
    console.log("test");
    axios
      .get("http://172.0.0.1:8000/petugas")
      .then((res) => {
        console.log("res", res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
    // try {
    //   await axios.post(
    //     `${APIUrl}/masyarakat`,
    //     {
    //       nama_masy: registerInput.nama,
    // nik_masy: registerInput.nik,
    // no_hp_masy: registerInput.noponsel,
    // alamat_masy: registerInput.alamat,
    // username: registerInput.username,
    // password: registerInput.password,

    //
    //     },

    //   ).then((res) => {
    // console.log('resdata', res );
    // alert('Pendafaran Berhasil')
    //     navigation.navigate('MyTabs', {
    //   resData: res
    // })
    //   })
    // } catch (error) {
    //     console.log('gagal', error.response.data);
    //     alert('Pendafaran Gagal')
    // }
  };

  return (
    <View style={{ flex: 1 }}>
      <Image source={ICBassets} />

      <View style={{ marginTop: -120, marginLeft: 30 }}>
        <Image source={ICLapsam} />
        <Text style={{ color: "black", marginLeft: 80, marginTop: -20 }}>
          Register
        </Text>
      </View>
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
                  noponsel: e,
                })
              }
            />
            <InputText
              title="Username"
              onChangeText={(e) =>
                setRegisterInput({
                  ...registerInput,
                  username: e,
                })
              }
            />
            <InputText
              title="NIK"
              onChangeText={(e) =>
                setRegisterInput({
                  ...registerInput,
                  nik: e,
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
              title="Kata Sandi"
              secureText
              onChangeText={(e) =>
                setRegisterInput({
                  ...registerInput,
                  password: e,
                })
              }
            />

            <ButtonPrimary title="Daftar" onPress={handleRegister} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
