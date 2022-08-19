import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import ILPFoto from "../assets/pickfoto.png";
import InputText from "../Input/InputText";
import InputTextSampah from "../Input/InputTextSampah";
import ICSampah from "../assets/iconsampah.png";
import InputTextMini from "../Input/InputTextMini";
import ButtonSecondary from "../components/Button/ButtonSecondary";
import DropDownPicker from "react-native-dropdown-picker";

import { useSelector } from "react-redux";

import { useFocusEffect } from "@react-navigation/native";
import NewCameraPage from "./NewCameraPage";
import { inputSampah } from "../utils";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setDummySampah } from "../redux/reducers";

const uploadSampahMs = ({ route, navigation }) => {
  const [openUser, setOpenUser] = useState(false);
  const [valueUser, setValueUser] = useState(null);
  const [size, setSize] = useState({
    kecil: 0,
    sedang: 0,
    besar: 0,
  });

  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const dispatch = useDispatch();

  // console.log("usrselected", valueUser);
  const [user, setUser] = useState([
    { label: "Alamat Rumah", value: "rumah" },
    { label: "Alamat Kost", value: "kost" },
    { label: "Alamat Kantor", value: "kantor" },
  ]);

  const [image, setImage] = React.useState(false);

  const count = useSelector((state) => state.data);

  const { listDummySampah } = count;

  React.useEffect(() => {}, []);

  useFocusEffect(
    React.useCallback(() => {
      // const unsubscribe = API.subscribe(userId, (focus) => setFocus(data));
      console.log("count", count);

      // uri, type, name

      // return () => unsubscribe();
    }, [route])
  );

  const handleLaporkanSampah = async () => {
    const { nama_masy, id_masy } = count.dataUser;
    const total = size.kecil + size.besar + size.sedang;
    const { kecil, sedang, besar } = size;
    const images = `file://${image.path}`;
    const newAlamat = valueUser || "jl. jlan-jlan";
    const penempatan = `Test From Apk`;

    const body = {
      jumlah_sampah: total,
      nama_pelapor: nama_masy,
      alamat_lengkap: newAlamat,
      foto: images,
      tanggal: new Date().toString(),
      penempatan,
      id_masy,
      jml_kecil: kecil,
      jml_sedang: sedang,
      jml_besar: besar,
    };

    await dispatch(
      setDummySampah([
        ...listDummySampah,
        {
          jumlah_sampah: total,
          nama_pelapor: nama_masy,
          alamat_lengkap: newAlamat,
          foto: image,
          tanggal: new Date().toString(),
          penempatan,
          id_masy,
          jml_kecil: kecil,
          jml_sedang: sedang,
          jml_besar: besar,
        },
      ])
    );
    navigation.goBack();

    // const formDataInputSampah = new FormData();
    // formDataInputSampah.append("jumlah_sampah", total);
    // formDataInputSampah.append("nama_pelapor", nama_masy);
    // formDataInputSampah.append("alamat_lengkap", newAlamat || "bla bla bla");
    // formDataInputSampah.append("foto", {
    //   uri: `file://${image.path}`,
    //   name: "blablabla.jpg",
    //   type: "images/jpg",
    // });

    // formDataInputSampah.append("penempatan", `Test From Apk`);
    // formDataInputSampah.append("id_masy", 5);
    // formDataInputSampah.append("tanggal", new Date());
    // formDataInputSampah.append("jml_kecil", size.kecil);
    // formDataInputSampah.append("jml_sedang", size.sedang);
    // formDataInputSampah.append("jml_besar", size.besar);

    // inputSampah({ body: formDataInputSampah })
    //   .then((res) => {
    //     console.log("res", res);
    //   })
    //   .catch(function (error) {
    //     if (error.response) {
    //       console.log("Error message", error);

    //       console.log("err response", error.response);
    //       console.log("err data", error.response.data);
    //       console.log("err status", error.response.status);
    //       console.log("err headers", error.response.headers);
    //     } else if (error.request) {
    //       console.log("err request", error.request);
    //     } else {
    //       console.log("Error message", error.message);
    //     }
    //     console.log("err config", error.config);
    //   });
  };

  return (
    <>
      {isCameraOpen ? (
        <NewCameraPage
          setIsCameraOpen={(e, image) => {
            setIsCameraOpen(e);
            setImage(image);
          }}
        />
      ) : (
        <>
          <View style={{ flex: 1, backgroundColor: "white" }}>
            <HeaderComponent title="Laporkan Sampah" />

            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => {
                setIsCameraOpen(true);
              }}
            >
              {/* {image && ( */}
              <Image
                source={
                  image
                    ? {
                        uri:
                          `file://${image.path}` ||
                          `file://${count.image.path}`,
                      }
                    : ILPFoto
                }
                style={{
                  height: 200,
                  width: 200,
                  borderRadius: 20,
                  // backgroundColor: "lightblue",
                }}
              />
              {/* )} */}
            </TouchableOpacity>

            <ScrollView
              style={{
                marginTop: 10,
              }}
            >
              <View
                style={{
                  height: "100%",
                  backgroundColor: "#5FD068",
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                  paddingHorizontal: 16,
                  paddingVertical: 16,
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Masukan Sampah Kamu
                </Text>
                <View style={{ marginTop: 10 }}>
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      marginBottom: 14,
                    }}
                  >
                    Alamat Penjemputan
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

                <View style={{ flexDirection: "row", marginTop: 30 }}>
                  <View>
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                      <Image source={ICSampah} />
                      <Text
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          marginLeft: 18,
                          fontSize: 16,
                        }}
                      >
                        Kecil
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                      <Image source={ICSampah} />
                      <Text
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          marginLeft: 18,
                          fontSize: 16,
                        }}
                      >
                        Sedang
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                      <Image source={ICSampah} />
                      <Text
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          marginLeft: 18,
                          fontSize: 16,
                        }}
                      >
                        Besar
                      </Text>
                    </View>
                  </View>

                  <View>
                    <View>
                      <InputTextMini
                        placeholder={"0"}
                        onChangeText={(e) => setSize({ ...size, kecil: e })}
                      />
                    </View>

                    <View style={{ marginTop: 30 }}>
                      <InputTextMini
                        placeholder={"0"}
                        onChangeText={(e) => setSize({ ...size, sedang: e })}
                      />
                    </View>

                    <View style={{ marginTop: 30 }}>
                      <InputTextMini
                        placeholder={"0"}
                        onChangeText={(e) => setSize({ ...size, besar: e })}
                      />
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 30,
                  }}
                >
                  <ButtonSecondary
                    title="Angkut"
                    onPress={() => {
                      handleLaporkanSampah();
                    }}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </>
      )}
    </>
  );
};

export default uploadSampahMs;

const styles = StyleSheet.create({});
