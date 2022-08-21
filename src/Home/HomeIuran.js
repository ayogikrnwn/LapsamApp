import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ICLengkap from "../assets/right.png";
import HeaderHomeIuran from "../components/HeaderComponent/HeaderHomeIuran";
import CardPembayaran from "../components/CardPembayaran";
import InputTextSearch from "../Input/InputTextSearch";
import { formatDate, getListIuran } from "../utils";
import { useSelector } from "react-redux";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

let firstRunning = true;

const HomeIuran = () => {
  const navigation = useNavigation();
  const [listDoneRedemPoint, setListDoneRedemPoint] = useState(false);
  const [listTerimaRedemPoint, setListTerimaRedemPoint] = useState(false);
  const [listRedemPoint, setListRedemPoint] = useState(false);
  const [keyword, setKeyword] = useState("");

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

  useFocusEffect(
    React.useCallback(() => {
      getListIuran({
        selector,
        user,
        setListTerimaRedemPoint,
        setListRedemPoint,
        setListDoneRedemPoint,
      }).then((res) => {
        firstRunning = false;
      });

      return () => {
        firstRunning = true;
        // console.log("leave");
      };
    }, [])
  );

  const newReedemPoint = () => {
    if (listTerimaRedemPoint && listRedemPoint) {
      let newStatus = Array.isArray(listDoneRedemPoint)
        ? listDoneRedemPoint.map((data) => {
            return { ...data, statusReedem: "selesai" };
          })
        : [];
      let result = [...listTerimaRedemPoint, ...newStatus, ...listRedemPoint];
      if (keyword) {
        let filter = result.filter((data) => data.nik_masy.includes(keyword));
        if (filter.length > 0) {
          return filter.slice(0, 6);
        } else {
          return false;
        }
      } else if (listTerimaRedemPoint) {
        return listTerimaRedemPoint;
      } else {
        return false;
      }
    } else if (listRedemPoint) {
      let newStatus = Array.isArray(listDoneRedemPoint)
        ? listDoneRedemPoint.map((data) => {
            return { ...data, statusReedem: "selesai" };
          })
        : [];
      let result = [...newStatus, ...listRedemPoint];
      // console.log("listDoneRedemPoint", listDoneRedemPoint);
      // console.log("newStatus", newStatus);
      // console.log("result", result);

      if (keyword) {
        let filter = result.filter((data) => data.nik_masy.includes(keyword));
        if (filter.length > 0) {
          return filter.slice(0, 6);
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
    // else if (listRedemPoint) {
    //   const result = listRedemPoint.slice(0, 6);

    //   if (keyword) {
    //     let filter = result.filter((data) => data.nik_masy.includes(keyword));
    //     if (filter.length > 0) {
    //       return filter;
    //     } else {
    //       return false;
    //     }
    //   } else {
    //     return result;
    //   }
    // }
    else {
      return false;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <HeaderHomeIuran user={selector.dataUser} />

      <View style={styles.wrapper}>
        <ScrollView>
          <Text style={styles.txtTgl}>{formatDate(new Date())}</Text>

          <View style={{ paddingHorizontal: 20, marginTop: 40 }}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 20,
                color: "white",
              }}
            >
              Penukaran Poin
            </Text>

            <View style={{ marginTop: 24 }}>
              <View style={{ flexDirection: "row" }}>
                <InputTextSearch
                  onChangeText={(e) => {
                    setKeyword(e);
                  }}
                  placeholder="Cari NIK"
                />
                <TouchableOpacity
                  style={{
                    width: 80,
                    height: 50,
                    borderRadius: 12,
                    backgroundColor: "white",
                    marginLeft: 20,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      marginTop: 15,
                      color: "green",
                    }}
                  >
                    Cari
                  </Text>
                </TouchableOpacity>
              </View>
              {newReedemPoint() &&
                newReedemPoint().map((data) => {
                  return (
                    <CardPembayaran
                      user={data.nama_masy}
                      alamat={data.alamat}
                      nik={data.nik_masy}
                      label={
                        data.reedemPorccess === 2
                          ? "Sudah Dibayar"
                          : data.data
                          ? "Terima"
                          : "Reedem"
                      }
                      color={
                        data.reedemPorccess === 2
                          ? "green"
                          : data.data
                          ? "red"
                          : "#FBDF07"
                      }
                      onClickButton={() => {
                        // console.log(data.reedemPorccess);
                        navigation.navigate("Pembayaran", {
                          ...data,
                          reedemPorccess: data.reedemPorccess
                            ? data.reedemPorccess
                            : data.data
                            ? true
                            : false,
                        });
                      }}
                    />
                  );
                })}
              {/* {listDoneRedemPoint &&
                listDoneRedemPoint.map((data) => {
                  return (
                    <CardPembayaran
                      user={data.nama_masy}
                      alamat={data.alamat}
                      nik={data.nik_masy}
                      label={"Sudah Dibayar"}
                    />
                  );
                })} */}
              {/* {listRedemPoint &&
                listRedemPoint.map((data) => {
                  return (
                    <CardPembayaran
                      user={data.nama_masy}
                      alamat={data.alamat}
                      nik={"nik : " + data.nik_masy}
                      label="Reedem"
                      onClickButton={() => {
                        navigation.navigate("Pembayaran", data);
                      }}
                    />
                  );
                })} */}
            </View>

            {/* <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 20,
                color: "white",
              }}
            >
              Iuran Tagihan
            </Text>

            <View style={{ marginTop: 24 }}>
              <CardPembayaran label="Sudah Bayar" />
              <CardPembayaran label="Sudah Bayar" />
            </View> */}

            <TouchableOpacity
              style={{ flexDirection: "row", marginVertical: 10 }}
              onPress={() => navigation.navigate("Detail")}
            >
              <Text>Lebih Lengkap</Text>
              <Image
                source={ICLengkap}
                style={{ width: 15, height: 15, marginTop: 5, marginLeft: 5 }}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const NewComponent = () => {
  const [state, setState] = useState(false);
  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        setState(true);
      }, 100);

      return () => {
        setState(false);
        // console.log("leave");
      };
    }, [])
  );

  if (state) {
    return <HomeIuran />;
  } else {
    return <View>{/* <Text>Loading . . . </Text> */}</View>;
  }
};

export default NewComponent;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#5FD068",
    height: "78%",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: -40,
  },
  imgStyles: {
    borderWidth: 10,
    borderColor: "white",
    borderRadius: 80,
    marginTop: -70,
    marginLeft: 10,
  },
  txtTgl: {
    fontWeight: "200",
    fontSize: 14,
    color: "black",
    alignSelf: "flex-end",
    marginRight: 16,
    marginTop: 10,
  },
  txtLight: { fontWeight: "bold", fontSize: 14, color: "white" },
});
