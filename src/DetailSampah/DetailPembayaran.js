import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ICLeft from '../assets/left.png'
import CardPembayaranDetail from '../components/CardDetailSampah/CardPembayaranDetail'

const DetailPembayaran = ({navigation}) => {
const [namaHeader, setNamaHeader] = useState("Kiri")


  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
       


<View style={{paddingVertical: 24, paddingHorizontal: 16}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity  onPress={() => navigation.navigate('Home')}>
              <Image source={ICLeft} style={{width: 35, height: 35, marginLeft: 10}} />
              </TouchableOpacity>
              <View style={{ width: '100%'}}>
              <Text style={{fontSize: 20, textAlign: 'center', fontWeight: 'bold', color: 'black', justifyContent: 'center', marginLeft: -50, marginTop: 5}}>Detail Tagihan</Text>
              </View>
               
           
           
            </View>
        {/* //header */}

     
        </View>
        <View style={{backgroundColor: '#5FD068', height: '100%', width: '100%', marginTop: 10, borderTopLeftRadius: 26, borderTopRightRadius: 26, paddingHorizontal: 10, paddingVertical: 20}}>
        <View style={{alignItems: 'center'}}>
        <CardPembayaranDetail onPress={() => navigation.navigate('Pembayaran')} />
        {/* <CardDetailSampah imgLeft={ICDiangkut} imgCenter={ICSwapGray} imgRight={ICNotAngkutDisabled} status="Telah Diangkut" />
        <CardDetailSampah imgLeft={ICDiangkutDisabled} imgCenter={ICSwap} imgRight={ICNotAngkutDisabled} status="Sedang Diangkut" />
        <CardDetailSampah imgLeft={ICDiangkutDisabled} imgCenter={ICSwapGray} imgRight={ICNotAngkut} status="Belum Diangkut" /> */}
      
    
        </View>
   
        </View> 
     
    



          {/* //header */}
          
    </View>
  )
}

export default DetailPembayaran

const styles = StyleSheet.create({})