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
import { setDataUser } from "../redux/reducers";
import { asyncDataUser, asyncRemoveData } from "../utils";
import { useDispatch } from "react-redux";

const AkunPetugas = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View style={{ alignItems: "center", marginTop: 80 }}>
          <Image source={ILFoto} />
          <Text style={{ fontSize: 16, color: "black", fontWeight: "bold" }}>
            Petugas
          </Text>
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
            onPress={() => navigation.navigate("UbahProfilePS")}
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
              Informasi Data Diri{" "}
            </Text>
          </TouchableOpacity>

          <View style={{ width: "100%", alignItems: "center" }}>
            <ButtonSecondary
              title="Logout"
              onPress={async () => {
                dispatch(setDataUser(false));

                await asyncRemoveData(asyncDataUser);
                navigation.navigate("ChooseUser");
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AkunPetugas;

const styles = StyleSheet.create({});
