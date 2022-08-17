import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ICDone from '../../assets/done.png';

const CardDetailSampah = ({imgLeft, imgCenter, imgRight, status}) => {
  return (
    <View style={{backgroundColor: 'white', width: '90  %', height: 130, borderRadius: 14, paddingHorizontal: 14, paddingVertical: 10, marginBottom: 10}}>
    
      <Text style={{fontWeight: '200', color: 'black'}}>08:17, 14 Juni 2022</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

    <View>
    <Text style={{fontWeight: 'bold', color: 'black', fontSize: 18, marginTop: 8}}>1 Kantong Plastik Kecil</Text>
      <Text style={{ fontWeight: '200', color: 'black', fontSize: 14, marginTop: 8}}>Jl. Lorem Ipsum dolor si amet</Text>
      <Text style={{ fontWeight: '200', color: 'black', fontSize: 14, marginTop: 8}}>Nama Petugas : John</Text>
    </View>
    <View>
    <Text style={{fontWeight: '200', color: 'black', fontSize: 12, marginTop: 8, color:'#5FD068', textAlign: 'center'}}>{status}</Text>
   <View style={{ flexDirection: 'row', marginTop: 9}}>
   <Image source={imgLeft} style={{width: 34, height: 34}} />
    <Image source={imgCenter} style={{width: 34, height: 34}} />
    <Image source={imgRight} style={{width: 34, height: 34}} />
   </View>
    
    </View>
      </View>
      

    </View>
  )
}

export default CardDetailSampah

const styles = StyleSheet.create({})