import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import HeaderHomePetugas from "../components/HeaderComponent/HeaderHomePetugas";
import ILPhoto from "../assets/dummyphoto.png";
import ICDone from "../assets/done.png";
import CardStatusPetugas from "../components/CardStatusSampah/CardStatusPetugas";
import ICSwap from "../assets/swap.png";
import ICFail from "../assets/fail.png";
import ICLengkap from "../assets/right.png";
import ILSampah from "../assets/masukansampah.png";
import ILNews from "../assets/ilnews.png";
import { formatDate } from "../utils";
import { useSelector } from "react-redux";

const HomePetugas = ({ navigation }) => {
  const { listDummySampah } = useSelector((state) => state.data);

  const detail = () => {
    if (listDummySampah.length > 0) {
      let filter = listDummySampah.filter((data) => data.status !== 2);
      if (filter.length > 0) {
        return filter;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <HeaderHomePetugas />

      <View style={styles.wrapper}>
        <ScrollView>
          <Text style={styles.txtTgl}>{formatDate(new Date())}</Text>

          <View style={{ paddingHorizontal: 20, marginTop: 40 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.txtLight}>J A D W A L</Text>
              <Text style={styles.txtLight}>Status</Text>
            </View>

            {detail() &&
              detail()
                .slice(0, 3)

                .map((data) => {
                  return (
                    <CardStatusPetugas
                      tanggal={data.tanggal}
                      alamat={data.alamat_lengkap}
                      img={data.status === 0 ? ICFail : ICDone}
                    />
                  );
                })}
            {/* 
            <CardStatusPetugas img={ICDone} />
            <CardStatusPetugas img={ICDone} />
            <CardStatusPetugas img={ICDone} /> */}

            <TouchableOpacity
              style={{ flexDirection: "row", marginTop: 10 }}
              onPress={() => navigation.navigate("DetailOrder")}
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

export default HomePetugas;

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
