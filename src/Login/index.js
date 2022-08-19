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
import {
  asyncDataUser,
  asyncStoreData,
  getAllMasyarakat,
  fetchLogin,
} from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { setDataUser } from "../redux/reducers";

const Login = ({ navigation }) => {
  const [loginInput, setLoginInput] = useState({});

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.user);
  const { user } = selector;

  const handleLogin = async () => {
    // console.log("login");
    // navigation.navigate("MyTabs");

    try {
      let find = user.find(
        (data) =>
          data.username === loginInput.username &&
          data.password === loginInput.password
      );
      if (find) {
        console.log("masuk sini");
        await asyncStoreData(asyncDataUser, find);

        dispatch(setDataUser(find));
        // navigation.navigate("MyTabs");
        // setTimeout(() => {
        navigation.navigate("Home");
        // }, 250);
      } else {
        Alert.alert("username atau password yang anda masukan salah");
      }
    } catch {
      Alert.alert("username atau password yang anda masukan salah");
    }

    // const formDataLogin = new FormData();
    // formDataLogin.append("username", loginInput.username);
    // formDataLogin.append("password", loginInput.password);
    // fetchLogin({
    //   body: formDataLogin,
    //   role: "masyarakat",
    // })
    //   .then(async (res) => {
    //     await asyncStoreData(asyncDataUser, res.data);

    //     dispatch(setDataUser(res.data));
    //     navigation.navigate("MyTabs");

    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <View style={{ flex: 1 }}>
      <Image source={ICBassets} />

      <View style={{ marginTop: -120, marginLeft: 30 }}>
        <Image source={ICLapsam} />
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

          <Text style={{ color: "black" }}>Belum Punya Akun?</Text>
          <TouchableOpacity
            style={{ marginBottom: 30 }}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={{ fontWeight: "bold", color: "#5FD068" }}>
              Klik Disini
            </Text>
          </TouchableOpacity>

          <ButtonPrimary title="Login" onPress={handleLogin} />
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
