import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const InputTextMini = ({
  title,
  secureText,
  placeholder,
  onChangeText,
  value,
}) => {
  return (
    <View style={{ width: 100, marginTop: -30, height: 50, marginLeft: 10 }}>
      <Text style={{ color: "black", marginBottom: 8 }}>{title}</Text>
      {value ? (
        <TextInput
          value={value}
          keyboardType="numeric"
          style={{
            backgroundColor: "white",
            color: "black",
            borderRadius: 12,
            textAlign: "center",
            marginBottom: 8,
          }}
          secureTextEntry={secureText}
          placeholder={placeholder}
          onChangeText={onChangeText}
          // keyboardType="numeric"
        />
      ) : (
        <TextInput
          keyboardType="numeric"
          style={{
            backgroundColor: "white",
            color: "black",
            borderRadius: 12,
            textAlign: "center",
            marginBottom: 8,
          }}
          secureTextEntry={secureText}
          placeholder={placeholder}
          onChangeText={onChangeText}
          // keyboardType="numeric"
        />
      )}
    </View>
  );
};

export default InputTextMini;

const styles = StyleSheet.create({});
