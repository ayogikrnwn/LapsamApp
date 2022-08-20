import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import InputText from "../Input/InputText";
import ButtonPrimary from "../components/Button/ButtonPrimary";
import { useDispatch, useSelector } from "react-redux";
import {
  getMyProgressRedemPoint,
  redemPoint,
  removeProgressRedemPoint,
} from "../utils";

const RedeemPoint = ({ navigation }) => {
  // const selector  = useSelector(state => state.data)
  const [myProccessRedem, setMyProccessRedem] = useState(false);

  const selector = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const { dataUser } = selector;

  const { point } = dataUser;
  // console.log("selector", selector);

  const ajukanTukar = () => {
    if (point === 25000) {
      setMyProccessRedem(true);
      redemPoint({ dispatch, selector }).then((res) => {
        getMyProgressRedemPoint({ selector }).then((res) => {
          if (res) {
            setMyProccessRedem(res);
          }
        });
      });
    } else {
      Alert.alert("Point anda tidak cukup");
    }
  };

  React.useEffect(() => {
    getMyProgressRedemPoint({ selector }).then((res) => {
      if (res) {
        setMyProccessRedem(res);
      } else {
        setMyProccessRedem(false);
      }
    });
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <HeaderComponent title="Redeem Point" />
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ alignItems: "center", marginTop: 40 }}>
            <Text style={{ fontSize: 20, color: "black", marginBottom: 10 }}>
              Poin Anda
            </Text>
            <Text style={{ fontSize: 20, color: "black", marginBottom: 10 }}>
              {point || "0"}
            </Text>

            <ButtonPrimary
              disabled={myProccessRedem}
              onPress={() => {
                ajukanTukar();
              }}
              title="Ajukan Tukarkan Poin"
            />
            <Text
              style={{
                fontSize: 14,
                color: "black",
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              Dengan mengklik tukar poin berarti anda mengajukan penukaran poin
              25 ribu poin untuk pembayaran iuran sampah 1bulan{" "}
            </Text>
            {myProccessRedem && (
              <Text>
                Sedang melakukan proses redem point sebesar{" "}
                {myProccessRedem.point}
              </Text>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default RedeemPoint;

const styles = StyleSheet.create({});
