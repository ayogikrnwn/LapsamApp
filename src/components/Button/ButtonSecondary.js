import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ButtonSecondary = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{backgroundColor: 'white', width: '50%', height: 40, borderRadius: 12, marginBottom: 14, backgroundColor: 'black', justifyContent: 'center'}}>
        <Text style={{textAlign: 'center', fontSize: 20, fontFamily: 'Poppins-Light', paddingVertical: 5, color: 'white'}}>{title} </Text>
    </TouchableOpacity>
  )
}

export default ButtonSecondary

const styles = StyleSheet.create({})