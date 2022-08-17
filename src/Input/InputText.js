import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputText = ({title, secureText, placeholder, onChangeText}) => {
  return (
    <View style={{width: '70%'}}>
      <Text style={{color: 'black', marginBottom: 8}}>{title}</Text>
      <TextInput style={{borderWidth: 1, borderColor: '#5FD068', color: 'black',   borderRadius: 12, marginBottom: 8}}
      secureTextEntry={secureText} placeholder={placeholder} onChangeText={onChangeText} />
    </View>
  )
}

export default InputText

const styles = StyleSheet.create({})