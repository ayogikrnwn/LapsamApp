import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ICArrow from '../../assets/arrowright.png';

const CardTiket = ({onPress}) => {
  return (
    <TouchableOpacity style={{height: 150, backgroundColor: 'white', marginTop: 10}} onPress={onPress} >
        <View style={{flexDirection: 'row', justifyContent: 'space-between',paddingVertical: 10, paddingHorizontal: 10 }}>
            <View>
            <Text style={{fontSize: 15, color: '#404040', fontWeight: 'bold'}}>Argo Sumatera 201</Text>
      <Text style={{fontSize: 12, color: '#B4B4B4'}}>Ekonomi</Text>
      <View style={{flexDirection: 'row'}}>
        <View>
        <Text style={{marginTop: 20}}>ACH</Text>
        <Text  style={{marginTop: 15}}>14.00</Text>
        </View>

     <Image source={ICArrow} style={{marginTop: 25}} />
     <View>
     <Text style={{marginTop: 20, marginLeft: 10}}>PDG</Text>
     <Text style={{marginTop: 15, marginLeft: 10}}>17.00</Text>
     </View>
    
      </View>
     
            </View>
            <View>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#F08200'}}>Rp 90.000</Text>
    
            </View>
        </View>
    
    </TouchableOpacity>
  )
}

export default CardTiket

const styles = StyleSheet.create({})