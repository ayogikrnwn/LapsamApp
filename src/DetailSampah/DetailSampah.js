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
import CardDetailSampah from "../components/CardDetailSampah";
import ICDiangkut from "../assets/done.png";
import ICDiangkutDisabled from "../assets/shieldGrey.png";
import ICSwap from "../assets/swap.png";
import ICSwapGray from "../assets/swapGrey.png";
import ICNotAngkut from "../assets/fail.png";
import ICNotAngkutDisabled from "../assets/failGrey.png";
import CardRiwayatSampah from "../components/CardDetailSampah/CardRiwayatSampah";
import { useSelector, useDispatch } from "react-redux";
import { getListSampah } from "../utils";
import { setListSampah } from "../redux/reducers";

const DetailSampah = ({ navigation }) => {
  const [namaHeader, setNamaHeader] = useState("Kiri");
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.data);
  const { listSampah, listDummySampah, dataUser } = selector;
  React.useEffect(() => {
    getListSampah()
      .then((res) => {
        dispatch(setListSampah(res.data.data));

        // console.log("res", res.data.data);
      })
      .catch((err) => {});
  }, []);

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
                    Detail Sampah
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
                    Riwayat Sampah
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
              // marginTop: 10,
              // borderTopLeftRadius: 26,
              // borderTopRightRadius: 26,
              borderRadius: 26,
              paddingHorizontal: 10,
              paddingTop: 10,
              justifyContent: "center",
              alignContent: "center",
              alignSelf: "center",
            }}
          >
            <ScrollView

            //  style={{ alignItems: "center" }}
            >
              {listDummySampah.length > 0 &&
                listDummySampah
                  .filter((data) => data.id_masy === dataUser.id_masy)
                  .map((data) => {
                    return (
                      <CardDetailSampah
                        tanggal={data.tanggal}
                        imgLeft={ICDiangkut}
                        imgCenter={ICSwapGray}
                        imgRight={ICNotAngkutDisabled}
                        status={"Telah Diangkut"}
                        title={data.nama_pelapor}
                        alamat={data.alamat_lengkap}
                      />
                    );
                  })}
              {listSampah.length > 0 ? (
                listSampah.map((data) => {
                  return (
                    <CardDetailSampah
                      imgLeft={ICDiangkut}
                      imgCenter={ICSwapGray}
                      imgRight={ICNotAngkutDisabled}
                      status="Telah Diangkut"
                    />
                  );
                })
              ) : (
                <>
                  <CardDetailSampah
                    imgLeft={ICDiangkut}
                    imgCenter={ICSwapGray}
                    imgRight={ICNotAngkutDisabled}
                    status="Telah Diangkut - dummy"
                  />
                  <CardDetailSampah
                    imgLeft={ICDiangkutDisabled}
                    imgCenter={ICSwap}
                    imgRight={ICNotAngkutDisabled}
                    status="Sedang Diangkut - dummy"
                  />
                  <CardDetailSampah
                    imgLeft={ICDiangkutDisabled}
                    imgCenter={ICSwapGray}
                    imgRight={ICNotAngkut}
                    status="Belum Diangkut - dummy"
                  />
                </>
              )}
            </ScrollView>
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
                    Detail Sampah
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
                    Riwayat Sampah
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
              <CardRiwayatSampah
                imgLeft={ICDiangkut}
                imgCenter={ICSwapGray}
                imgRight={ICNotAngkutDisabled}
                status="Telah Diangkut"
              />
              <CardRiwayatSampah
                imgLeft={ICDiangkutDisabled}
                imgCenter={ICSwap}
                imgRight={ICNotAngkutDisabled}
                status="Sedang Diangkut"
              />
              <CardRiwayatSampah
                imgLeft={ICDiangkutDisabled}
                imgCenter={ICSwapGray}
                imgRight={ICNotAngkut}
                status="Belum Diangkut"
              />
            </View>
          </View>
        </>
      ) : null}

      {/* //header */}
    </View>
  );
};

export default DetailSampah;

const styles = StyleSheet.create({});
