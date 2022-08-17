import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ICDone from '../../assets/done.png';

const CardRiwayatSampah = ({imgLeft, imgCenter, imgRight, status}) => {
  return (
    <View style={{backgroundColor: 'white', width: '90  %', height: 130, borderRadius: 14, paddingHorizontal: 14, paddingVertical: 10, marginBottom: 10}}>
    
      <Text style={{fontWeight: '200', color: 'black'}}>08:17, 14 Juni 2022</Text>
      <Text style={{fontWeight: '200', color: 'black', color:'#5FD068',}}>Sampah Telah Diangkut</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

    <View>
    <Text style={{fontWeight: 'bold', color: 'black', fontSize: 16, marginTop: 8}}>1 Kantong Plastik Kecil</Text>
      <Text style={{ fontWeight: '200', color: 'black', fontSize: 14, marginTop: 8}}>Jl. Lorem Ipsum dolor si amet</Text>
     
    </View>
    <View>
   
   <View style={{ flexDirection: 'row', marginTop: -14}}>
   <Image source={imgLeft} style={{width: 34, height: 34}} />
    <Image source={imgCenter} style={{width: 34, height: 34}} />
    <Image source={imgRight} style={{width: 34, height: 34}} />
   </View>
   <Text style={{fontWeight: '200', color: 'black'}}>Petugas : Jognhn</Text>
    </View>
      </View>
      

    </View>
  )
}

export default CardRiwayatSampah

const styles = StyleSheet.create({})