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
import InputTextMini from "../Input/InputTextMini";
import ButtonSecondary from "../components/Button/ButtonSecondary";
import DropDownPicker from "react-native-dropdown-picker";

import { useSelector } from "react-redux";

import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
} from "@react-navigation/native";
import NewCameraPage from "./NewCameraPage";
import { addPoint, asyncDataUser, asyncGetData, inputSampah } from "../utils";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setDummySampah } from "../redux/reducers";

let mounted = false;
let defaultOpenUser = false,
  defaultValueUser = null,
  defaultSize = {
    kecil: 0,
    sedang: 0,
    besar: 0,
  },
  defaultUser = [{ label: "Tambah Alamat", value: "tambah alamat" }];
const UploadSampahMs = () => {
  const navigation = useNavigation();
  const [openUser, setOpenUser] = useState(defaultOpenUser);
  const [valueUser, setValueUser] = useState(defaultValueUser);
  const [size, setSize] = useState(defaultSize);
  const [user, setUser] = useState(defaultUser);
  const [image, setImage] = React.useState(false);
  const [loading, setLoading] = useState(false);

  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.data);

  const count = useSelector((state) => state.data);

  const { listDummySampah } = count;

  const isFocused = useIsFocused();

  const firstRunning = async () => {
    if (selector.listAlamat.length > 0) {
      await asyncGetData("listAlamat").then((res) => {
        if (res !== null) {
          const filter = res.filter(
            (data) => data.id_masy === selector.dataUser.id_masy
          );
          if (filter.length > 0) {
            let loop = filter.map((data) => {
              return {
                label: data.tandai_sebagai,
                value: `${data.nama_jalan || "Jl. Lorem Ipsum"}
        ${data.kelurahan || "Kelurahan"} ${data.kecamatan || "kecamatan"}
        ${data.kota || "Kabupaten"} kode pos ${data.kode_pos || 45231}`,
              };
            });
            setUser(loop);
          } else {
            setUser(defaultUser);
          }
        } else {
          setUser(defaultUser);
        }
      });
    }
  };

  React.useEffect(() => {
    firstRunning();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;

      const firstRunning = async () => {
        if (selector.listAlamat.length > 0) {
          await asyncGetData("listAlamat").then(async (res) => {
            const newDataUser = await asyncGetData(asyncDataUser);
            if (res !== null) {
              const filter = res.filter(
                (data) => data.id_masy === newDataUser.id_masy
              );
              if (filter.length > 0) {
                let loop = filter.map((data) => {
                  return {
                    label: data.tandai_sebagai,
                    value: `${data.nama_jalan || "Jl. Lorem Ipsum"} ${
                      data.kelurahan || "Kelurahan"
                    } ${data.kecamatan || "kecamatan"} ${
                      data.kota || "Kabupaten"
                    } kode pos ${data.kode_pos || 45231}`,
                  };
                });
                if (isActive) {
                  setUser(user);
                  isActive = false;
                }
                setUser(loop);
              } else {
                if (isActive) {
                  setUser(defaultUser);
                  isActive = false;
                }
              }
            } else {
              if (isActive) {
                setUser(defaultUser);
                isActive = false;
              }
            }
          });
        }
      };

      firstRunning();
      // const unsubscribe = API.subscribe(userId, user => setUser(user));

      return () => {
        isActive = true;

        setOpenUser(defaultOpenUser);
        setValueUser(defaultValueUser);
        setSize(defaultSize);
        setUser(defaultUser);
        setImage(false);
        setLoading(false);
        setIsCameraOpen(false);
      };
    }, [])
  );

  const handleLaporkanSampah = () => {
    setLoading(true);
    const { nama_masy, id_masy, no_hp_masy } = count.dataUser;
    const total = size.kecil + size.besar + size.sedang;
    const { kecil, sedang, besar } = size;
    const images = `file://${image.path}`;
    const newAlamat = valueUser || "jl. jlan-jlan";
    const penempatan = `Test From Apk`;
    let named = Math.random() * 19352;

    const body = {
      jumlah_sampah: total,
      nama_pelapor: nama_masy,
      alamat_lengkap: newAlamat,
      foto: `${named}.jpg`,
      tanggal: new Date().toString(),
      penempatan,
      id_masy,
      jml_kecil: kecil,
      jml_sedang: sedang,
      jml_besar: besar,
      id_sampah: Math.random() * 2343,
      status: 0,
      no_hp_masy: no_hp_masy,
    };

    if (image && (kecil || sedang || besar) && valueUser) {
      const formData = new FormData();

      formData.append("mypic", {
        uri: `file://${image.path}`,
        name: "blablabla.jpg",
        type: "image/jpg",
      });

      axios({
        data: formData,
        baseURL: `http://192.168.125.140:1324/upload-image/${named}`,
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      })
        .then((res) => {
          addPoint({
            dataUser: count.dataUser,
            dispatch: dispatch,
            jumlah: 25000,
          }).then(async (res) => {
            Alert.alert("berhasil melaporkan sampah");

            await dispatch(setDummySampah([...listDummySampah, body]));
            setLoading(false);
            navigation.goBack();
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setLoading(false);

      Alert.alert("Mohon isi semua bagian");
    }

    // console.log("image", image);

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

            <ScrollView
              style={{
                marginTop: 10,
              }}
            >
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
                    setValue={(e) => {
                      if (e() === "tambah alamat") {
                        navigation.navigate("AlamatUser");
                      } else {
                        setValueUser(e);
                      }
                    }}
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
                        value={size.kecil}
                        placeholder={"0"}
                        onChangeText={(e) => setSize({ ...size, kecil: e })}
                      />
                    </View>

                    <View style={{ marginTop: 30 }}>
                      <InputTextMini
                        value={size.sedang}
                        placeholder={"0"}
                        onChangeText={(e) => setSize({ ...size, sedang: e })}
                      />
                    </View>

                    <View style={{ marginTop: 30 }}>
                      <InputTextMini
                        value={size.besar}
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
                    disabled={loading}
                    title={loading ? "mengangkut..." : "Angkut"}
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

const NewComponent = () => {
  const [state, setState] = useState(false);
  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        setState(true);
      }, 500);

      return () => {
        setState(false);
        // console.log("leave");
      };
    }, [])
  );

  if (state) {
    return <UploadSampahMs />;
  } else {
    return <View>{/* <Text>Loading . . . </Text> */}</View>;
  }
};

export default NewComponent;

const styles = StyleSheet.create({});
