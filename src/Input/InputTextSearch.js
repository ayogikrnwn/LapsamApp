import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputTextSearch = ({title, secureText, placeholder, onChangeText}) => {
  return (
    <View style={{width: '70%'}}>
  
      <TextInput style={{borderWidth: 1, borderColor: '#5FD068', color: 'black',  backgroundColor: 'white', borderRadius: 12, marginBottom: 8}}
      secureTextEntry={secureText} placeholder={placeholder} onChangeText={onChangeText} />
    </View>
  )
}

export default InputTextSearch

const styles = StyleSheet.create({})