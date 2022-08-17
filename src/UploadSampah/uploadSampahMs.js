import {
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

import { useFocusEffect } from "@react-navigation/native";

const uploadSampahMs = ({ route, navigation }) => {
  const [openUser, setOpenUser] = useState(false);
  const [valueUser, setValueUser] = useState(null);

  console.log("usrselected", valueUser);
  const [user, setUser] = useState([
    { label: "Alamat Rumah", value: "rumah" },
    { label: "Alamat Kost", value: "kost" },
    { label: "Alamat Kantor", value: "kantor" },
  ]);

  const [image, setImage] = React.useState("images");

  useFocusEffect(
    React.useCallback(() => {
      // const unsubscribe = API.subscribe(userId, (focus) => setFocus(data));
      console.log(route.params);

      // return () => unsubscribe();
    }, [route])
  );

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <HeaderComponent title="Laporkan Sampah" />

      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() =>
          navigation.navigate("CameraPage", { setImage: setImage })
        }
      >
        <Text>{image}</Text>
        <Image source={ILPFoto} />
      </TouchableOpacity>

      <ScrollView>
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
              style={{ color: "white", fontWeight: "bold", marginBottom: 14 }}
            >
              Alamat Penjemputan
            </Text>
            <DropDownPicker
              placeholder="Silahkan pilih "
              open={openUser}
              value={valueUser}
              items={user}
              setOpen={setOpenUser}
              setValue={setValueUser}
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
                <InputTextMini />
              </View>

              <View style={{ marginTop: 30 }}>
                <InputTextMini />
              </View>

              <View style={{ marginTop: 30 }}>
                <InputTextMini />
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
              title="Angkut"
              onPress={() => navigation.navigate("CameraPage")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default uploadSampahMs;

const styles = StyleSheet.create({});
