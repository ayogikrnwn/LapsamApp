import {
  Alert,
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
import InputTextDisabled from "../Input/InputTextDisabled";
import ButtonSecondary from "../components/Button/ButtonSecondary";
import { useSelector, useDispatch } from "react-redux";
import { asyncGetData, asyncStoreData, listDummySampah } from "../utils";
import { setDummySampah } from "../redux/reducers";
import NewCameraPage from "./NewCameraPage";
import axios from "axios";

let dummy2 = [];

const uploadSampahPs = ({ route, navigation }) => {
  let selector = useSelector((state) => state.data);
  let dispatch = useDispatch();
  // let { listDummySampah } = selector;
  // let osArray = listDummySampah;
  // dummy2 = listDummySampah;
  const [state, setState] = useState([]);

  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [image, setImage] = React.useState(false);

  const { data } = route.params;

  React.useEffect(async () => {
    // console.log("listDummySampah", listDummySampah);

    let dummyData = await asyncGetData(listDummySampah);

    await setState(dummyData);
  }, []);

  const updateData = async () => {
    if (image) {
      let named = Math.random() * 19352;

      var newState = await asyncGetData(listDummySampah);
      let elementIndex = newState.findIndex(
        (obj) => obj.id_sampah === route.params.data.id_sampah
      );

      newState[elementIndex].status = 2;
      newState[elementIndex].petugas = selector.dataUser.nama_petugas;
      newState[elementIndex].foto_dari_petugas = named;

      const formData = new FormData();

      formData.append("mypic", {
        uri: `file://${image.path}`,
        name: "blablabla.jpg",
        type: "image/jpg",
      });

      axios({
        data: formData,
        baseURL: `http://192.168.158.140:1324/upload-image/${named}`,
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      })
        .then(async (res) => {
          await asyncStoreData(listDummySampah, newState);
          Alert.alert("Sampah berhasil diangkut");

          dispatch(setDummySampah(newState));
          navigation.navigate("Home");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Alert.alert("Mohon Sertakan Gambar");
    }
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
            <HeaderComponent title="Angkut Sampah" />

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

            <ScrollView>
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
                <View style={{ marginTop: 10 }}>
                  <Text
                    style={{ color: "white", fontWeight: "bold", fontSize: 14 }}
                  >
                    Nama
                  </Text>
                  <Text
                    style={{ color: "black", fontWeight: "bold", fontSize: 16 }}
                  >
                    {data.nama_pelapor || "Jordi"}
                  </Text>

                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 14,
                      marginTop: 10,
                    }}
                  >
                    Alamat
                  </Text>
                  <Text
                    style={{ color: "black", fontWeight: "bold", fontSize: 16 }}
                  >
                    {data.alamat_lengkap || "Jl. Lorem Ipsum"}
                  </Text>

                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 14,
                      marginTop: 10,
                    }}
                  >
                    Nomor Handphone
                  </Text>
                  <Text
                    style={{ color: "black", fontWeight: "bold", fontSize: 16 }}
                  >
                    {data.no_hp_masy || "082157538742"}
                  </Text>
                </View>

                <View style={{ flexDirection: "row", marginTop: 20 }}>
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
                      <InputTextDisabled value={data.jml_kecil} />
                    </View>

                    <View style={{ marginTop: 30 }}>
                      <InputTextDisabled value={data.jml_sedang} />
                    </View>

                    <View style={{ marginTop: 30 }}>
                      <InputTextDisabled value={data.jml_besar} />
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
                      updateData("state", state);
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

export default uploadSampahPs;

const styles = StyleSheet.create({});
