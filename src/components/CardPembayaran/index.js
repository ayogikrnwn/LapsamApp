import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const CardPembayaran = ({img, label}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between',width: '100%'}}>
        <View>
        <Text style={{color:'white'}}>Lorem Ipsum II</Text>
      <View>
      <Text style={{color: 'white'}}>Jl. Lorem Ipsum 1 </Text>
      <Text style={{color: 'white'}}>Rp 100.000</Text>
      </View>
        </View>
        <View style={{width: 150, height: 50, backgroundColor: 'white', borderRadius: 30 }}>
            <Text style={{textAlign: 'center', marginTop: 13, fontWeight: 'bold', color: 'green'}}>{label}</Text>
        </View>
   
      </View>
     

      <View>
        <Image source={img} style={{width: 40, height: 40}} />

      </View>
    </View>
  )
}

export default CardPembayaran

const styles = StyleSheet.create({})