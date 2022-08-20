import {
  Image,
  ScrollView,
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
import {
  asyncDataUser,
  asyncGetData,
  asyncStoreData,
  fetchLogin,
  loginMasyarakat,
} from "../utils";
import { setDataUser } from "../redux/reducers";

const LoginPetugas = ({ navigation }) => {
  const [loginInput, setLoginInput] = useState({});

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.user.user);

  const handleLogin = async () => {
    if (loginInput.username && loginInput.password) {
      const formDataLogin = new FormData();
      formDataLogin.append("username", loginInput.username);
      formDataLogin.append("password", loginInput.password);

      let findUser = selector.find(
        (data) =>
          data.username === loginInput.username &&
          loginInput.password === data.password
      );
      if (findUser) {
        dispatch(setDataUser(findUser));
        await asyncStoreData(asyncDataUser, findUser);
        // navigation.navigate("MyTabsPetugas");

        navigation.navigate("Home");
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
          Petugas
        </Text>
      </View>
      <ScrollView
      //  style={{ flex: 1 }}
      >
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
      </ScrollView>
    </View>
  );
};

export default LoginPetugas;

const styles = StyleSheet.create({});
