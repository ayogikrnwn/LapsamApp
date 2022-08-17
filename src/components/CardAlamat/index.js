import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardAlamat = () => {
  return (
    <View style={{backgroundColor: 'white', width: '90%', height: 150, alignSelf: 'center', marginTop: 20, padding: 16}}>
    <Text style={{fontWeight: 'bold', fontSize: 14, color: 'black'}}>Alamat Rumah</Text>
    <Text style={{ fontSize: 14, color: 'black', marginTop: 10}}>Yacob Andre</Text>
    <Text style={{ fontSize: 14, color: 'black'}}>08114442222</Text>
    <Text style={{ fontSize: 14, color: 'black', marginTop: 10}}>Jl. Lorem Ipsum Kelurahan Lorem Kabupaten Ipsum Kota X 45231</Text>


</View>

  )
}

export default CardAlamat

const styles = StyleSheet.create({})