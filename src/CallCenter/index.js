import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ICLeft, Call, Email, PhoneCall } from "../assets";

const CallCenter = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          // marginTop: 10,
          // borderWidth: 1,
          borderBottomWidth: 0.5,
          paddingVertical: 5,
          backgroundColor: "#C5F297",
          // borderColor: "#C5F297",
        }}
      >
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={ICLeft}
              style={{ width: 35, height: 35, marginLeft: 10 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 30,
          }}
        >
          <Text
            style={{
              fontSize: 25,
            }}
          >
            Hubungi Kami
          </Text>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 50,
          }}
        >
          Admin
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              marginRight: 10,
              alignContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <Image
              source={PhoneCall}
              style={{ width: 24, height: 24, marginLeft: 10 }}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 19,
              }}
            >
              0822123145
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              marginRight: 10,
              alignContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <Image
              source={Email}
              style={{ width: 24, height: 24, marginLeft: 10 }}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 19,
              }}
            >
              Yacob@gmail.com
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CallCenter;
