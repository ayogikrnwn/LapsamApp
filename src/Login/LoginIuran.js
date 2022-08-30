import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import ICBassets from "../assets/backasset.png";
import ICLapsam from "../assets/logoLapSam.png";
import InputText from "../Input/InputText";
import ButtonPrimary from "../components/Button/ButtonPrimary";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import axios from "axios";
import APIUrl from "../config/APIUrl";
import { useDispatch, useSelector } from "react-redux";
import { setDataUser } from "../redux/reducers";
import { asyncDataUser, asyncStoreData } from "../utils";

const LoginIuran = ({ navigation }) => {
  const [loginInput, setLoginInput] = useState({});

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.user.user);

  const handleLoginOri = async () => {
    navigation.navigate("MyTabsIuran");
    //   await axios.post(
    //     `${APIUrl}/pengelola/login`,
    //     {
    //       username: loginInput.username,
    //       password: loginInput.password
    //     },

    //   ).then((res) => {
    //     navigation.navigate('MyTabIuran')
    //   })
    // } catch (error) {
    //     console.log('gagal', error.response.data);
    //     alert('Login Gagal')
    // }
  };

  const handleLogin = async () => {
    let dummy = {
      id_petugas_iuran: 3,
      nama_petugas: "Fajar",
      nik_petugas: "1739481209384",
      no_hp_petugas: "081384584848",
      jabatan: "Manager",
      alamat: "jl.rumbai",
      penempatan: "Rumbai Pesisir",
      username: "power",
      password: "ranger",
      updated_at: "2022-08-06T02:43:55.000000Z",
      created_at: "2022-08-06T02:36:46.000000Z",
      token:
        "a80e2b6182e76d325ec8c979c1b11b8f9e572dc774787a424ed812557db7939a96e6c8a3edfe1572",
      role: "petugas-iuran",
    };

    if (loginInput.username && loginInput.password) {
      const formDataLogin = new FormData();
      formDataLogin.append("username", loginInput.username);
      formDataLogin.append("password", loginInput.password);

      let findUser = [...selector, dummy].find(
        (data) =>
          data.username === loginInput.username &&
          loginInput.password === data.password &&
          data.role === "petugas-iuran"
      );

      if (findUser) {
        dispatch(setDataUser(findUser));
        await asyncStoreData(asyncDataUser, findUser);

        // navigation.navigate("MyTabsIuran");

        navigation.navigate("Home");
      } else {
        Alert.alert("username atau password yang anda masukan salah");
      }

      // asyncGetData("role-petugas").then(async (res) => {
      //   if (
      //     loginInput.username === res.username &&
      //     loginInput.password === res.password
      //   ) {

      //   }
      // });

      // fetchLogin({
      //   body: formDataLogin,
      //   role: "petugas",
      // }).then(async (res) => {
      //   dispatch(setDataUser(res.data));
      //   await asyncStoreData(asyncDataUser, res.data);
      //   navigation.navigate("MyTabsPetugas");
      // });
    }

    // try {
    //   await axios.post(
    //     `${APIUrl}/petugas/login`,
    //     {
    //       username: loginInput.username,
    //       password: loginInput.password
    //     },

    //   ).then((res) => {
    //     navigation.navigate('MyTabsPetugas')
    //   })
    // } catch (error) {
    //     console.log('gagal', error.response.data);
    //     alert('Login Gagal')
    // }
  };

  return (
    <View style={{ flex: 1 }}>
      <Image source={ICBassets} />

      <View style={{ marginTop: -120, marginLeft: 30 }}>
        <Image source={ICLapsam} />
        <Text style={{ color: "black", marginLeft: 80, marginTop: -20 }}>
          Petugas Iuran
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: "center", marginTop: 70 }}>
          <InputText
            title="Username"
            onChangeText={(e) =>
              setLoginInput({
                ...loginInput,
                username: e,
              })
            }
          />
          <InputText
            title="Password"
            secureText
            onChangeText={(e) =>
              setLoginInput({
                ...loginInput,
                password: e,
              })
            }
          />

          <ButtonPrimary title="Login" onPress={handleLogin} />
        </View>
      </View>
    </View>
  );
};

export default LoginIuran;

const styles = StyleSheet.create({});
