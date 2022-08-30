import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputTextSampah = ({title, secureText, placeholder, onChangeText}) => {
  return (
    <View style={{width: '70%'}}>
      <Text style={{color: 'white', marginBottom: 8}}>{title}</Text>
      <TextInput style={{borderWidth: 1, borderColor: 'white', color: 'black', borderRadius: 12, backgroundColor: 'white', marginBottom: 8, height: 40}}
      secureTextEntry={secureText} placeholder={placeholder} onChangeText={onChangeText} />
    </View>
  )
}

export default InputTextSampah

const styles = StyleSheet.create({})