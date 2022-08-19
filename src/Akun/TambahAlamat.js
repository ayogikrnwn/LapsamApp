import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import InputText from "../Input/InputText";
import ButtonPrimary from "../components/Button/ButtonPrimary";
import { asyncStoreData } from "../utils";
import { useSelector, useDispatch } from "react-redux";
import { setListAlamat } from "../redux/reducers";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TambahAlamat = ({ navigation }) => {
  const [alamat, setAlamat] = useState({
    tandai_sebagai: "",
    nama_jalan: "",
    kelurahan: "",
    kecamatan: "",
    kota: "",
    kode_pos: "",
    nomor_handphone: "",
    nama_alamat: "",
  });

  const selector = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleRegister = async () => {
    const {
      tandai_sebagai,
      nama_jalan,
      kelurahan,
      kecamatan,
      kota,
      kode_pos,
      nomor_handphone,
      nama_alamat,
    } = alamat;
    const { id_masy } = selector.dataUser;

    // await AsyncStorage.removeItem("listAlamat");
    // let listAlamat = await AsyncStorage.getItem("listAlamat");
    // console.log("listAlamat", listAlamat);

    if (id_masy) {
      if (
        tandai_sebagai ||
        nama_jalan ||
        kelurahan ||
        kecamatan ||
        kota ||
        kode_pos ||
        nomor_handphone ||
        nama_alamat
      ) {
        const body = {
            tandai_sebagai,
            nama_jalan,
            kelurahan,
            kecamatan,
            kota,
            kode_pos,
            nomor_handphone,
            nama_alamat,
            id_masy,
          },
          newBody = [...selector.listAlamat, body];

        await asyncStoreData("listAlamat", newBody);
        dispatch(setListAlamat(newBody));
        navigation.goBack();
      } else {
        Alert.alert("mohon isi semua form");
      }
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <HeaderComponent title="Tambah Alamat" />
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ alignItems: "center", marginTop: 60 }}>
            <InputText
              title="Tandai Sebagai Alamat"
              onChangeText={(e) =>
                setAlamat({
                  ...alamat,
                  tandai_sebagai: e,
                })
              }
            />
            <InputText
              title="Nama Pemilik Sampah"
              onChangeText={(e) =>
                setAlamat({
                  ...alamat,
                  nama_alamat: e,
                })
              }
            />
            <InputText
              title="Nama Jalan"
              onChangeText={(e) =>
                setAlamat({
                  ...alamat,
                  nama_jalan: e,
                })
              }
            />
            <InputText
              title="Kelurahan/Desa"
              onChangeText={(e) =>
                setAlamat({
                  ...alamat,
                  kelurahan: e,
                })
              }
            />
            <InputText
              title="Kecamatan"
              onChangeText={(e) =>
                setAlamat({
                  ...alamat,
                  kecamatan: e,
                })
              }
            />
            <InputText
              title="Kota/Kabupaten"
              onChangeText={(e) =>
                setAlamat({
                  ...alamat,
                  kota: e,
                })
              }
            />
            <InputText
              title="Kode Pos"
              onChangeText={(e) =>
                setAlamat({
                  ...alamat,
                  kode_pos: e,
                })
              }
            />

            <InputText
              title="Nomor Handphone"
              onChangeText={(e) =>
                setAlamat({
                  ...alamat,
                  nomor_handphone: e,
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
