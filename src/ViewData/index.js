import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ICUnikom from "../assets/unikom.png";
import Fire from "../config/Fire";
import ButtonPrimary from "../components/Button/ButtonPrimary";

const ViewData = ({ navigation }) => {
  const [hasilData, setHasilData] = useState([]);

  useEffect(() => {
    handleLihatData();
  }, []);

  const handleLihatData = () => {
    try {
      Fire.database()
        .ref(`users/data`)
        .once("value")
        .then((res) => {
          let gej = [];
          if (res) {
            const value = res.val();
            // console.log(value);
            if (value) {
              Object.keys(value).map((item) => {
                gej.push(value[item]);
              });
              setHasilData(gej);
            }
          }
        });
    } catch (error) {}
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginLeft: 25 }}>
        <Image source={ICUnikom} />
        <Text style={{ paddingTop: 10 }}>View Data</Text>

        {hasilData.map((item, index) => {
          return (
            <View
              style={{ flexDirection: "row", marginRight: 10, marginTop: 10 }}
            >
              <View style={{ marginRight: 14 }}>
                <Text style={{ color: "black" }}>Nomor Induk Mahasiswa</Text>
                <Text style={{ color: "black" }}>Nama Lengkap</Text>
                <Text style={{ color: "black" }}>Kelas</Text>
                <Text style={{ color: "black" }}>Program Studi</Text>
              </View>
              <View>
                <Text>{item.nim}</Text>
                <Text>{item.namaLengkap}</Text>
                <Text>{item.kelas}</Text>
                <Text>{item.prodi}</Text>
              </View>
            </View>
          );
        })}
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <ButtonPrimary title="Kembali" onPress={() => navigation.goBack()} />
      </View>
      {/*
       */}
    </View>
  );
};

export default ViewData;

const styles = StyleSheet.create({});
