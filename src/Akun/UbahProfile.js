import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import InputText from "../Input/InputText";
import ButtonPrimary from "../components/Button/ButtonPrimary";
import { useSelector, useDispatch } from "react-redux";
import { setDataUser as reduxSetDataUser } from "../redux/reducers";
import { asyncDataUser, asyncGetData, asyncStoreData } from "../utils";
const UbahProfile = ({ navigation }) => {
  const [dataUser, setDataUser] = useState({
    alamat: "",
    created_at: "",
    nama_masy: "",
    nik_masy: "",
    no_hp_masy: "",
    password: "",
    updated_at: "",
    username: "",
  });
  const {
    alamat,
    created_at,
    nama_masy,
    nik_masy,
    no_hp_masy,
    password,
    updated_at,
    username,
  } = dataUser;

  const dispatch = useDispatch();
  const handleRegister = async () => {
    if (
      alamat &&
      created_at &&
      nama_masy &&
      nik_masy &&
      no_hp_masy &&
      password &&
      updated_at &&
      username
    ) {
      let newState = await asyncGetData("userRegister");

      let elementIndex = newState.findIndex(
        (obj) => obj.id_masy === dataUser.id_masy
      );

      newState[elementIndex] = dataUser;

      dispatch(reduxSetDataUser(dataUser));
      await asyncStoreData(asyncDataUser, dataUser);
      await asyncStoreData("userRegister", newState);

      Alert.alert("Berhasil menyimpan");

      navigation.goBack();
    } else {
      Alert.alert("Semua bidang harus terisi");
    }

    // navigation.navigate("Home");

    // newState[elementIndex].status = 2;
    // newState[elementIndex].petugas = selector.dataUser.nama_petugas;
    // newState[elementIndex].foto_dari_petugas = image;

    // await asyncStoreData(listDummySampah, newState);

    // dispatch(setDummySampah(newState));
    // navigation.goBack();

    // alert("Ubah Data Berhasil");
    // navigation.navigate("Home");
  };
  const selector = useSelector((state) => state.data);

  React.useEffect(() => {
    let { dataUser } = selector;
    setDataUser(dataUser);
  }, []);

  const [registerInput, setRegisterInput] = useState({});
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <HeaderComponent title="Ubah Profile" />
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ alignItems: "center", marginTop: 60 }}>
            <InputText
              value={dataUser.nama_masy}
              title="Nama"
              onChangeText={(e) =>
                setDataUser({
                  ...dataUser,
                  nama_masy: e,
                })
              }
            />
            <InputText
              value={dataUser.no_hp_masy}
              title="Nomor Ponsel"
              onChangeText={(e) =>
                setDataUser({
                  ...dataUser,
                  no_hp_masy: e,
                })
              }
            />
            <InputText
              value={dataUser.username}
              title="Username"
              onChangeText={(e) =>
                setDataUser({
                  ...dataUser,
                  username: e,
                })
              }
            />
            <InputText
              title="NIK"
              value={dataUser.nik_masy}
              onChangeText={(e) =>
                setDataUser({
                  ...dataUser,
                  nik_masy: e,
                })
              }
            />
            <InputText
              value={dataUser.alamat}
              title="Alamat"
              onChangeText={(e) =>
                setDataUser({
                  ...dataUser,
                  alamat: e,
                })
              }
            />

            <InputText
              value={dataUser.password}
              title="Kata Sandi"
              secureText
              onChangeText={(e) =>
                setDataUser({
                  ...dataUser,
                  password: e,
                })
              }
            />

            <ButtonPrimary title="Simpan" onPress={handleRegister} />
            <ButtonPrimary
              title="Lihat Alamat"
              onPress={() => navigation.navigate("AlamatUser")}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default UbahProfile;

const styles = StyleSheet.create({});
