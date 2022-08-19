import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ICLeft from "../../assets/left.png";
import { useNavigation } from "@react-navigation/native";

const HeaderComponent = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: 80,
        backgroundColor: "white",
        justifyContent: "center",
        borderRadius: 15,
        // flex: 1,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flex: 0.1,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              // console.log("back");
              navigation.goBack();
            }}
          >
            <Image
              source={ICLeft}
              style={{ width: 35, height: 35, marginLeft: 10 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              color: "#232323",
              marginLeft: -30,
              fontWeight: "400",
              alignItems: "center",
            }}
          >
            {title}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({});
