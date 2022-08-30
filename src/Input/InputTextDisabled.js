import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const InputTextDisabled = ({
  title,
  secureText,
  placeholder,
  onChangeText,
  value,
}) => {
  return (
    <View style={{ width: 100, marginTop: -30, height: 50, marginLeft: 10 }}>
      <Text style={{ color: "black", marginBottom: 8 }}>{title}</Text>
      <TextInput
        keyboardType="numeric"
        style={{
          backgroundColor: "#D9D9D9",
          color: "black",
          borderRadius: 12,
          textAlign: "center",
          marginBottom: 8,
        }}
        secureTextEntry={secureText}
        placeholder={placeholder}
        value={value || "0"}
        editable={false}
      />
    </View>
  );
};

export default InputTextDisabled;

const styles = StyleSheet.create({});
