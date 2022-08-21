import {
  Alert,
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
import { useDispatch, useSelector } from "react-redux";
import {
  asyncDataUser,
  asyncStoreData,
  clearStorage,
  fetchLogin,
  registerMasyarakat,
} from "../utils";
import { setDataUser } from "../redux/reducers";
import { userRegister } from "../redux/reducerUser";

const Register = ({ navigation }) => {
  const [registerInput, setRegisterInput] = useState({
    nama: "",
    nik: "",
    noponsel: "",
    alamat: "",
    username: "",
    password: "",
  });
  //     console.log(loginInput);

  const dummyDataSuccessRegisterLogin = {
    id_masy: 5,
    nama_masy: "Fajar kucing",
    id_alamat: "jl.rumbai",
    nik_masy: "1739481209384",
    no_hp_masy: "081384584848",
    point: "2",
    username: "power",
    password: "$2y$10$ciFcAfg2ZjaN5LDX71iflOFXCEbpMUnTc9vH5qWFAlbl4QebLiN3C",
    updated_at: "2022-08-05T17:42:16.000000Z",
    created_at: "2022-08-05T17:31:00.000000Z",
    token:
      "ea8e99a8ec3933f0b30d9613b1d6fddd10dd6bb6c8661c7dca07fe47b3005b0c3bd264d3e0928df2",
  };

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.user);

  const { user } = selector;

  const handleRegister = async () => {
    // navigation.navigate("Home");

    // let formDataRegister = new FormData();
    // formDataRegister.append("nama_masy", registerInput.nama);
    // formDataRegister.append("nik_masy", registerInput.nik);
    // formDataRegister.append("no_hp_masy", registerInput.noponsel);
    // formDataRegister.append("alamat", registerInput.alamat);
    // formDataRegister.append("username", registerInput.username);
    // formDataRegister.append("password", registerInput.password);

    // let formDataLogin = new FormData();
    // formDataLogin.append("username", registerInput.username);
    // formDataLogin.append("password", registerInput.password);
    const { nama, nik, noponsel, alamat, username, password } = registerInput;
    const find = user.find((data) => data.username === username);
    const body = {
      // nama_masy: "rohan",
      nama_masy: registerInput.nama,
      // nik_masy: "12323434545",
      nik_masy: registerInput.nik,
      // no_hp_masy: "123234345456",
      no_hp_masy: registerInput.noponsel,
      // alamat: "jl. jalannn",
      alamat: registerInput.alamat,
      point: 0,
      // username: "rohan",
      username: registerInput.username,
      // password: "password",
      password: registerInput.password,
      id_masy: Math.random() * 1974235,
      updated_at: new Date().toString(),
      created_at: new Date().toString(),
    };

    // console.log("[...user, body]", [...user, body]);

    let findUsername = user.find((data) => {
      return data.username === registerInput.username;
    });
    let findNIK = user.find((data) => {
      return data.nik_masy === registerInput.nik;
    });
    let findNumber = user.find((data) => {
      return data.no_hp_masy === registerInput.noponsel;
    });

    if (findUsername) {
      Alert.alert("Username sudah digunakan");
    } else if (findNIK) {
      Alert.alert("NIK sudah digunakan");
    } else if (findNumber) {
      Alert.alert("Nomor Ponsel sudah digunakan");
    } else if (nama && nik && noponsel && alamat && username && password) {
      await asyncStoreData(asyncDataUser, body);
      await asyncStoreData("userRegister", [...user, body]);

      dispatch(userRegister(body));

      dispatch(setDataUser(body));

      navigation.navigate("Home");
    } else {
      Alert.alert("Mohon isi semua bagian");
    }

    // navigation.navigate("MyTabs", {
    //   resData: dummyDataSuccessRegisterLogin,
    // });

    // console.log("body", body);

    // registerMasyarakat({ body: formDataRegister })
    //   .then((res) => {
    //     fetchLogin({ body: formDataLogin, role: "masyarakat" }).then(
    //       async (res) => {
    //         console.log(res);
    //         await asyncStoreData(asyncDataUser, res.data);

    //         dispatch(setDataUser(res.data));

    //         navigation.navigate("MyTabs", {
    //           resData: res,
    //         });
    //       }
    //     );
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //     alert("Pendafaran Gagal");
    //   });
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
