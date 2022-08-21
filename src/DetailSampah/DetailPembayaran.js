import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ICLeft from "../assets/left.png";
import CardPembayaranDetail from "../components/CardDetailSampah/CardPembayaranDetail";
import { useSelector } from "react-redux";
import { getListIuran } from "../utils";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

const DetailPembayaran = () => {
  const navigation = useNavigation();
  const [namaHeader, setNamaHeader] = useState("Kiri");
  const [listDoneRedemPoint, setListDoneRedemPoint] = useState(false);
  const [listTerimaRedemPoint, setListTerimaRedemPoint] = useState(false);
  const [listRedemPoint, setListRedemPoint] = useState(false);
  const selector = useSelector((state) => state.data);
  const { user } = useSelector((state) => state.user);

  React.useEffect(() => {
    getListIuran({
      selector,
      user,
      setListTerimaRedemPoint,
      setListRedemPoint,
      setListDoneRedemPoint,
    });
  }, []);

  const newReedemPoint = () => {
    if (listTerimaRedemPoint && listRedemPoint) {
      let result = [...listTerimaRedemPoint, ...listRedemPoint];
      return result;
    } else if (listRedemPoint) {
      const result = listRedemPoint;
      let filter = result.filter((data) => data.nik_masy);
      return filter;
    } else {
      return false;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ paddingVertical: 24, paddingHorizontal: 16 }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              source={ICLeft}
              style={{ width: 35, height: 35, marginLeft: 10 }}
            />
          </TouchableOpacity>
          <View style={{ width: "100%" }}>
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
                fontWeight: "bold",
                color: "black",
                justifyContent: "center",
                marginLeft: -50,
                marginTop: 5,
              }}
            >
              Detail Tagihan
            </Text>
          </View>
        </View>
        {/* //header */}
      </View>
      <View
        style={{
          backgroundColor: "#5FD068",
          // height: "100%",
          // width: "100%",
          flex: 1,
          marginTop: 10,
          borderTopLeftRadius: 26,
          borderTopRightRadius: 26,
          paddingHorizontal: 10,
          paddingVertical: 20,
        }}
      >
        <ScrollView
        // style={{ alignItems: "center" }}
        >
          {newReedemPoint() &&
            newReedemPoint().map((data) => {
              return (
                <CardPembayaranDetail
                  nik={data.nik_masy}
                  user={data.nama_masy}
                  alamat={data.alamat}
                  // onPress={() => navigation.navigate("Pembayaran")}
                  label={data.data ? "Terima" : "Reedem"}
                  color={data.data ? "red" : "#FBDF07"}
                  onPress={() => {
                    navigation.navigate("Pembayaran", {
                      ...data,
                      reedemPorccess: data.data ? true : false,
                    });
                  }}
                />
              );
            })}
          {listDoneRedemPoint &&
            listDoneRedemPoint.map((data) => {
              return (
                <CardPembayaranDetail
                  nik={data.nik_masy}
                  user={data.nama_masy}
                  alamat={data.alamat}
                  // onPress={() => navigation.navigate("Pembayaran")}
                  label={"Sudah Dibayar"}
                  color={"green"}
                  onPress={() => {
                    // navigation.navigate("Pembayaran", {
                    //   ...data,
                    //   reedemPorccess: data.data ? true : false,
                    // });
                  }}
                />
              );
            })}

          {/* <CardDetailSampah imgLeft={ICDiangkut} imgCenter={ICSwapGray} imgRight={ICNotAngkutDisabled} status="Telah Diangkut" />
        <CardDetailSampah imgLeft={ICDiangkutDisabled} imgCenter={ICSwap} imgRight={ICNotAngkutDisabled} status="Sedang Diangkut" />
        <CardDetailSampah imgLeft={ICDiangkutDisabled} imgCenter={ICSwapGray} imgRight={ICNotAngkut} status="Belum Diangkut" /> */}
        </ScrollView>
      </View>

      {/* //header */}
    </View>
  );
};

const NewComponent = () => {
  const [state, setState] = useState(false);
  useFocusEffect(
    React.useCallback(() => {
      setState(true);
      return () => {
        setState(false);
        // console.log("leave");
      };
    }, [])
  );

  if (state) {
    return <DetailPembayaran />;
  } else {
    return (
      <View>
        <Text>Loading . . . </Text>
      </View>
    );
  }
};

export default NewComponent;

const styles = StyleSheet.create({});
