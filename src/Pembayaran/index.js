import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import ButtonSecondary from "../components/Button/ButtonSecondary";
import CardPembayaran from "../components/CardPembayaran";
import { RadioButton } from "react-native-paper";
import { asyncRemoveData, payRedeem } from "../utils";
import { useSelector, useDispatch } from "react-redux";
import { strings } from "../utils/strings";

const Pembayaran = ({ route, navigation }) => {
  const [checked, setChecked] = React.useState("first");
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.data);
  const [data, setData] = useState({
    alamat: "",
    created_at: "",
    id_masy: 0,
    nama_masy: "",
    nik_masy: "",
    no_hp_masy: "",
    password: "",
    point: 0,
    updated_at: "",
    username: "",
  });

  const {
    alamat,
    created_at,
    id_masy,
    nama_masy,
    nik_masy,
    no_hp_masy,
    password,
    point,
    updated_at,
    username,
    reedemPorccess,
  } = data;

  const handleBayar = () => {
    if (point === 25000) {
      payRedeem({ dataReedem: data, dispatch, selector });
      alert("Pembayaran Sukses");
      navigation.navigate("Home");
    } else {
      Alert.alert("Point tidak cukup");
    }

    // asyncRemoveData(strings.payRedeem);
  };

  React.useEffect(() => {
    if (route.params) {
      setData(route.params);
    }
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <HeaderComponent title="PEMBAYARAN" />
      <View
        style={{
          paddingHorizontal: 20,
          backgroundColor: "#5FD068",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <CardPembayaran
          user={nama_masy}
          alamat={alamat}
          nik={nik_masy}
          label={
            reedemPorccess === 2
              ? "Reedem Selesai"
              : reedemPorccess
              ? "Sedang Diajukan"
              : "Belum Diajukan"
          } // Belum Diajukan
        />
        <Text style={{ color: "white" }}>{no_hp_masy || "08251454354"}</Text>

        <View style={{ marginTop: 16, marginLeft: 150, flexDirection: "row" }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Tagihan :</Text>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 24,
              marginLeft: 20,
              marginTop: -10,
            }}
          >
            {point}
          </Text>
        </View>
        <View style={{ marginTop: 30 }}>
          {/* <TouchableOpacity
            style={{
              height: 50,
              borderRadius: 30,
              borderWidth: 1,
              borderColor: "white",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                marginTop: 13,
                fontWeight: "bold",
                color: "white",
              }}
            >
              Metode Pembayaran
            </Text>
          </TouchableOpacity> */}
          <View
            style={{
              marginTop: 30,
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            {/* <View style={{ flexDirection: "row" }}>
              <RadioButton
                value="first"
                color="white"
                status={checked === "first" ? "checked" : "unchecked"}
                onPress={() => setChecked("first")}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Poin
              </Text>
            </View> */}
            {/* <View style={{ flexDirection: "row", marginTop: 30 }}>
              <RadioButton
                value="second"
                color="white"
                status={checked === "second" ? "checked" : "unchecked"}
                onPress={() => setChecked("second")}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Tunai
              </Text>
            </View> */}
            <TouchableOpacity
              onPress={handleBayar}
              style={{
                height: 50,
                borderRadius: 30,
                backgroundColor: "white",
                marginTop: 30,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  marginTop: 13,
                  fontWeight: "bold",
                  color: "#5FD068",
                }}
              >
                {reedemPorccess === 2
                  ? "Redeem Telah Dibayar"
                  : reedemPorccess
                  ? "Terima Reedem Point"
                  : "Reedem Point"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Pembayaran;

const styles = StyleSheet.create({});
