import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import CardAlamat from "../components/CardAlamat/";
import ButtonPrimary from "../components/Button/ButtonPrimary";
import { useDispatch, useSelector } from "react-redux";

const AlamatUser = ({ navigation }) => {
  const selector = useSelector((state) => state.data);
  const { listAlamat, dataUser } = selector;
  const dispatch = useDispatch();

  const myAlamat = () => {
    let filter = listAlamat.filter((data) => data.id_masy === dataUser.id_masy);
    if (filter.length > 0) {
      return filter;
    } else {
      return false;
    }
    // console.log(filter);
  };

  return (
    <View style={{ flex: 1 }}>
      <HeaderComponent title="Data Alamat" />
      {myAlamat().length > 0 ? (
        <ScrollView>
          {myAlamat().length > 0 &&
            myAlamat().map((data) => {
              return (
                <>
                  <CardAlamat data={data} />
                </>
              );
            })}

          <View style={{ alignItems: "center", marginTop: 10 }}>
            <ButtonPrimary
              title="Tambah Alamat"
              onPress={() =>
                // userPetugas()
                navigation.navigate("TambahAlamat")
              }
            />
          </View>
        </ScrollView>
      ) : (
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              textAlign: "center",
            }}
          >
            Akun Ini Belum Mempunyai Alamat
          </Text>
          <ButtonPrimary
            title="Tambah Alamat"
            onPress={() =>
              // userPetugas()
              navigation.navigate("TambahAlamat")
            }
          />
        </View>
      )}
    </View>
  );
};

export default AlamatUser;

const styles = StyleSheet.create({});
