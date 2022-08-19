import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import ICLeft from "../assets/left.png";
import CardDetailOrder from "../components/CardDetailSampah/CardDetailOrder";
import ICDiangkut from "../assets/done.png";
import ICDiangkutDisabled from "../assets/shieldGrey.png";
import ICSwap from "../assets/swap.png";
import ICSwapGray from "../assets/swapGrey.png";
import ICNotAngkut from "../assets/fail.png";
import ICNotAngkutDisabled from "../assets/failGrey.png";
import CardRiwayatOrder from "../components/CardDetailSampah/CardRiwayatOrder";
import { useSelector } from "react-redux";

const DetailOrder = ({ navigation }) => {
  const [namaHeader, setNamaHeader] = useState("Kiri");

  const selector = useSelector((state) => state.data);
  const { listDummySampah } = selector;

  const detail = () => {
    if (listDummySampah.length > 0) {
      let filter = listDummySampah.filter((data) => data.status !== 2);
      if (filter.length > 0) {
        return filter;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const riwayat = () => {
    if (listDummySampah.length > 0) {
      let filter = listDummySampah.filter((data) => data.status === 2);
      if (filter.length > 0) {
        return filter;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {namaHeader == "Kiri" ? (
        <>
          <View style={{ paddingVertical: 24, paddingHorizontal: 16 }}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Image
                  source={ICLeft}
                  style={{ width: 35, height: 35, marginLeft: 10 }}
                />
              </TouchableOpacity>

              <View style={{ flexDirection: "row", marginLeft: 24 }}>
                <TouchableOpacity
                  onPress={() => setNamaHeader("Kiri")}
                  style={{
                    backgroundColor: "#F5F4F4",
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: 16, color: "black" }}>
                    Detail Jadwal
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => setNamaHeader("Kanan")}
                  style={{
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: 16, color: "black" }}>
                    Riwayat Angkut
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* //header */}
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "#5FD068",
              // height: "100%",
              // width: "100%",
              marginTop: 10,
              borderTopLeftRadius: 26,
              borderTopRightRadius: 26,
              paddingHorizontal: 10,
              paddingVertical: 20,
            }}
          >
            <View
              style={{
                //  alignItems: "center",
                flex: 1,
              }}
            >
              <ScrollView>
                {detail() ? (
                  detail().map((data) => {
                    // console.log(data);
                    return (
                      <>
                        <CardDetailOrder
                          data={data}
                          alamat={data.alamat_lengkap}
                          imageSampah={
                            typeof data.foto === "string"
                              ? `http://192.168.158.140:1324/uploads/${data.foto}`
                              : `http://192.168.158.140:1324/uploads/mypic-1660932210817.jpg`
                          }
                          // imageSampah={`file://${data.foto.path}`}
                          title={data.nama_pelapor}
                          tanggal={data.tanggal}
                          imgLeft={
                            data.status === 2 ? ICDiangkut : ICDiangkutDisabled
                          }
                          imgCenter={
                            data.status === 1 ? ICSwap : ICSwapGray

                            // ICSwapGray
                          }
                          imgRight={
                            data.status === 0
                              ? ICNotAngkut
                              : ICNotAngkutDisabled
                          }
                          status={data.status}
                          onPress={() =>
                            navigation.navigate("UploadSampahPS", {
                              data,
                            })
                          }
                        />
                      </>
                    );
                  })
                ) : (
                  <></>
                )}

                {/* <CardDetailOrder
                  imgLeft={ICDiangkutDisabled}
                  imgCenter={ICSwapGray}
                  imgRight={ICNotAngkut}
                  status="Telah Diangkut"
                  onPress={() => navigation.navigate("UploadSampahPS")}
                />
                <CardDetailOrder
                  imgLeft={ICDiangkutDisabled}
                  imgCenter={ICSwapGray}
                  imgRight={ICNotAngkut}
                  status="Telah Diangkut"
                  onPress={() => navigation.navigate("UploadSampahPS")}
                />
                <CardDetailOrder
                  imgLeft={ICDiangkutDisabled}
                  imgCenter={ICSwapGray}
                  imgRight={ICNotAngkut}
                  status="Telah Diangkut"
                  onPress={() => navigation.navigate("UploadSampahPS")}
                />
                <CardDetailOrder
                  imgLeft={ICDiangkutDisabled}
                  imgCenter={ICSwapGray}
                  imgRight={ICNotAngkut}
                  status="Telah Diangkut"
                  onPress={() => navigation.navigate("UploadSampahPS")}
                />
                <CardDetailOrder
                  imgLeft={ICDiangkutDisabled}
                  imgCenter={ICSwapGray}
                  imgRight={ICNotAngkut}
                  status="Telah Diangkut"
                  onPress={() => navigation.navigate("UploadSampahPS")}
                /> */}
              </ScrollView>
            </View>
          </View>
        </>
      ) : null}
      {namaHeader == "Kanan" ? (
        <>
          <View style={{ paddingVertical: 24, paddingHorizontal: 16 }}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Image
                  source={ICLeft}
                  style={{ width: 35, height: 35, marginLeft: 10 }}
                />
              </TouchableOpacity>
              <View style={{ flexDirection: "row", marginLeft: 24 }}>
                <TouchableOpacity
                  onPress={() => setNamaHeader("Kiri")}
                  style={{
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: 16, color: "black" }}>
                    Detail Jadwal
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    backgroundColor: "#F5F4F4",
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: 16, color: "black" }}>
                    Riwayat Angkut
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* //header */}
          </View>
          <View
            style={{
              backgroundColor: "#5FD068",
              height: "100%",
              width: "100%",
              marginTop: 10,
              borderTopLeftRadius: 26,
              borderTopRightRadius: 26,
              paddingHorizontal: 10,
              paddingVertical: 20,
            }}
          >
            <View style={{ alignItems: "center" }}>
              {riwayat() ? (
                riwayat().map((data) => {
                  // console.log(data);
                  return (
                    <>
                      <CardRiwayatOrder
                        data={data}
                        alamat={data.alamat_lengkap}
                        imageSampah={
                          typeof data.foto === "string"
                            ? `http://192.168.158.140:1324/uploads/${data.foto}`
                            : `http://192.168.158.140:1324/uploads/mypic-1660932210817.jpg`
                        }
                        // imageSampah={`file://${data.foto.path}`}
                        title={data.nama_pelapor}
                        tanggal={data.tanggal}
                        imgLeft={
                          data.status === 2 ? ICDiangkut : ICDiangkutDisabled
                        }
                        imgCenter={
                          data.status === 1 ? ICSwap : ICSwapGray

                          // ICSwapGray
                        }
                        imgRight={
                          data.status === 0 ? ICNotAngkut : ICNotAngkutDisabled
                        }
                        status={data.status}
                        onPress={() =>
                          navigation.navigate("UploadSampahPS", {
                            data,
                          })
                        }
                      />
                    </>
                  );
                })
              ) : (
                <></>
              )}
              {/* <CardRiwayatOrder
                imgLeft={ICDiangkut}
                imgCenter={ICSwapGray}
                imgRight={ICNotAngkutDisabled}
                status="Telah Diangkut"
              /> */}
            </View>
          </View>
        </>
      ) : null}

      {/* //header */}
    </View>
  );
};

export default DetailOrder;

const styles = StyleSheet.create({});
