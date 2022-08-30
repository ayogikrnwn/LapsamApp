import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ILFoto from "../assets/dumfoto.png";
import ICEdit from "../assets/EditPF.png";
import ICcall from "../assets/Call.png";
import ICpaper from "../assets/PaperEF.png";
import ButtonPrimary from "../components/Button/ButtonPrimary";
import ButtonSecondary from "../components/Button/ButtonSecondary";

import { useSelector, useDispatch } from "react-redux";
import { setDataUser } from "../redux/reducers";
import { asyncDataUser, asyncRemoveData } from "../utils";

const Akun = ({ navigation }) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.data.dataUser);
  const { nama_masy, point } = selector;
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View style={{ alignItems: "center", marginTop: 80 }}>
          <Image source={ILFoto} />
          <Text style={{ fontSize: 16, color: "black", fontWeight: "bold" }}>
            {nama_masy}
          </Text>
          <Text style={{ fontSize: 12, color: "black" }}>Poin :{point}</Text>
        </View>
        <View
          style={{
            backgroundColor: "#5FD068",
            height: 300,
            marginTop: 20,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            paddingHorizontal: 16,
            paddingVertical: 16,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("UbahProfile")}
            style={{
              backgroundColor: "white",
              width: "80%",
              height: 50,
              borderRadius: 14,
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
            }}
          >
            <Image source={ICEdit} />
            <Text
              style={{
                fontSize: 14,
                color: "black",
                fontWeight: "300",
                marginLeft: 20,
              }}
            >
              {" "}
              Ubah Data Diri{" "}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "white",
              width: "80%",
              height: 50,
              borderRadius: 14,
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
            }}
            onPress={() => {
              navigation.navigate("CallCenter");
            }}
          >
            <Image source={ICcall} style={{ width: 24, height: 24 }} />
            <Text
              style={{
                fontSize: 14,
                color: "black",
                fontWeight: "300",
                marginLeft: 20,
              }}
            >
              {" "}
              Hubungi Kami{" "}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("RedeemPoint")}
            style={{
              backgroundColor: "white",
              width: "80%",
              height: 50,
              borderRadius: 14,
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
            }}
          >
            <Image source={ICpaper} />
            <Text
              style={{
                fontSize: 14,
                color: "black",
                fontWeight: "300",
                marginLeft: 20,
              }}
            >
              {" "}
              Reedem Point{" "}
            </Text>
          </TouchableOpacity>

          <ButtonSecondary
            title="Logout"
            onPress={async () => {
              dispatch(setDataUser(false));

              await asyncRemoveData(asyncDataUser);

              navigation.navigate("ChooseUser");
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Akun;

const styles = StyleSheet.create({});
