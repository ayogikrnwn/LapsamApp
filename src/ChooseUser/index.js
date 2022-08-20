import { Image, StyleSheet, Text, View, AppState } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import ICBassets from "../assets/backasset.png";
import ICLapsam from "../assets/logoLapSam.png";
import DropDownPicker from "react-native-dropdown-picker";
import ButtonPrimary from "../components/Button/ButtonPrimary";
import {
  asyncDataUser,
  asyncGetData,
  asyncRemoveData,
  listDummySampah,
} from "../utils";
import { useDispatch, useSelector } from "react-redux";
import {
  setDataUser,
  setDummySampah,
  setListAlamat,
  setRedemPoint,
} from "../redux/reducers";
import { userRegister } from "../redux/reducerUser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { strings } from "../utils/strings";

const ChooseUser = ({ navigation }) => {
  const [openUser, setOpenUser] = useState(false);
  const [valueUser, setValueUser] = useState(null);

  const dispatch = useDispatch();

  const [user, setUser] = useState([
    { label: "Masyarakat", value: "masyarakat" },
    { label: "Petugas", value: "petugas" },
    { label: "Petugas Iuran", value: "petugas_iuran" },
  ]);

  const handleButton = () => {
    if (valueUser == null) {
      alert("Silahkan Pilih User Terlebih Dahulu");
    } else if (valueUser == "masyarakat") {
      navigation.navigate("Login");
    } else if (valueUser == "petugas") {
      navigation.navigate("LoginPetugas");
    } else {
      navigation.navigate("LoginIuran");
    }
  };

  React.useEffect(() => {
    asyncGetData("userRegister").then((res) => {
      if (typeof res === "object" && res !== null) {
        dispatch(userRegister(res));
      }
    });
    asyncGetData("listAlamat").then((res) => {
      if (typeof res === "object" && res !== null) {
        dispatch(setListAlamat(res));
      }
    });
    asyncGetData(strings.redemPoint).then((res) => {
      if (typeof res === "object" && res !== null) {
        dispatch(setRedemPoint(res));
      }
    });

    asyncGetData(asyncDataUser).then((res) => {
      asyncGetData(listDummySampah).then((dummy) => {
        dispatch(setDummySampah(dummy));
      });
      if (res) {
        if (res.nama_masy) {
          dispatch(setDataUser(res));

          navigation.navigate("MyTabs");
        } else if (res.nama_petugas) {
          dispatch(setDataUser(res));

          navigation.navigate("MyTabsPetugas");
        }
      }
    });
    // asyncRemoveData(asyncDataUser);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Image source={ICBassets} />

      <View style={{ marginTop: -120, marginLeft: 30 }}>
        <Image source={ICLapsam} />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          paddingHorizontal: 20,
          marginTop: -80,
        }}
      >
        <View>
          <Text
            style={{ color: "black", fontWeight: "bold", marginBottom: 14 }}
          >
            Login Sebagai
          </Text>
          <DropDownPicker
            placeholder="Silahkan pilih "
            open={openUser}
            value={valueUser}
            items={user}
            setOpen={setOpenUser}
            setValue={setValueUser}
            setItems={setUser}
          />
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <ButtonPrimary title="Masuk" onPress={handleButton} />
      </View>
    </View>
  );
};

export default ChooseUser;

const styles = StyleSheet.create({});
