import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent/HeaderComponent'
import CardAlamat from '../components/CardAlamat/'
import ButtonPrimary from '../components/Button/ButtonPrimary'

const AlamatUser = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
       <HeaderComponent title="Data Alamat" />

   <ScrollView>
   <CardAlamat />
    <CardAlamat />
    <CardAlamat />
    <View style={{alignItems: 'center'}}>
    <ButtonPrimary title="Tambah Alamat" onPress={() => navigation.navigate('TambahAlamat')} />
    </View>
   </ScrollView>
  
   
    </View>
  )
}

export default AlamatUser

const styles = StyleSheet.create({})