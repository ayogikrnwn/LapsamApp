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
const process = "process",
  done = "done";

const RedeemPoint = ({ navigation }) => {
  // const selector  = useSelector(state => state.data)
  const [myProccessRedem, setMyProccessRedem] = useState(false);

  const selector = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const { dataUser } = selector;

  const { point } = dataUser;
  // console.log("selector", selector);

  const ajukanTukar = () => {
    // if (point === 25000) {
    redemPoint({ dispatch, selector }).then((res) => {
      setMyProccessRedem(process);
    });
    // } else {
    //   Alert.alert("Point anda tidak cukup");
    // }
  };

  React.useEffect(() => {
    if (selector.payRedeem.length > 0) {
      let filter = selector.payRedeem;

      let find = filter.find(
        (data) =>
          data.id_masy === dataUser.id_masy &&
          new Date(data.created_at).getMonth() + 1 === new Date().getMonth() + 1
      );

      if (find) {
        setMyProccessRedem(done);
      } else {
        getMyProgressRedemPoint({ selector }).then((res) => {
          if (res) {
            setMyProccessRedem(process);
          } else {
            setMyProccessRedem(false);
          }
        });
      }

      // console.log("selector", filter);
      // console.log(dateCreated.getMonth());
      // new Date().getMonth()+1
    } else if (selector.redemPoint.length > 0) {
      getMyProgressRedemPoint({ selector }).then((res) => {
        if (res) {
          setMyProccessRedem(process);
        } else {
          setMyProccessRedem(false);
        }
      });
    }
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

            {myProccessRedem ? (
              <>
                <View
                  style={{
                    borderWidth: 0.5,
                    width: "90%",
                    marginVertical: 5,
                  }}
                />
                {myProccessRedem === process ? (
                  <Text
                    style={{
                      fontSize: 20,
                    }}
                  >
                    Sedang melakukan proses redem point{" "}
                  </Text>
                ) : (
                  <Text
                    style={{
                      fontSize: 20,
                    }}
                  >
                    kamu telah membayar iuran pada bulan ini
                  </Text>
                )}
              </>
            ) : (
              <></>
            )}

            {/* <ButtonPrimary
              onPress={() => {
                removeProgressRedemPoint({ selector, dispatch, dataUser });
              }}
              title="Ajukan Tukarkan Poin"
            /> */}

            {/* kamu telah membayar iuran pada bulan ini */}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default RedeemPoint;

const styles = StyleSheet.create({});
