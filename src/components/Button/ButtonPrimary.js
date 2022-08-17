import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ButtonPrimary = ({onPress, title}) => {
  return (
    <TouchableOpacity style={{backgroundColor: '#5FD068', width: '70%', height: 38,  marginBottom: 14, borderRadius: 6}} onPress={onPress}>
        <Text style={{textAlign: 'center', fontSize: 14, fontFamily: 'Poppins-Light', paddingVertical: 8, color: 'white'}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonPrimary

const styles = StyleSheet.create({})