import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ICLeft from '../assets/left.png'
import CardDetailSampah from '../components/CardDetailSampah'
import ICDiangkut from '../assets/done.png'
import ICDiangkutDisabled from '../assets/shieldGrey.png'
import ICSwap from '../assets/swap.png'
import ICSwapGray from '../assets/swapGrey.png'
import ICNotAngkut from '../assets/fail.png'
import ICNotAngkutDisabled from '../assets/failGrey.png'
import CardRiwayatSampah from '../components/CardDetailSampah/CardRiwayatSampah'

const DetailSampah = ({navigation}) => {
const [namaHeader, setNamaHeader] = useState("Kiri")


  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
       

{namaHeader == 'Kiri' ? 
<>
<View style={{paddingVertical: 24, paddingHorizontal: 16}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity  onPress={() => navigation.navigate('Home')}>
              <Image source={ICLeft} style={{width: 35, height: 35, marginLeft: 10}} />
              </TouchableOpacity>
         
            <View style={{flexDirection: 'row', marginLeft: 24}}>
            <TouchableOpacity onPress={() => setNamaHeader("Kiri")} style={{backgroundColor:"#F5F4F4", paddingHorizontal: 10, borderRadius: 10, justifyContent: 'center'}}>
            <Text style={{fontSize: 16, color: 'black'}}>Detail Sampah</Text>
            </TouchableOpacity>
         
            <TouchableOpacity onPress={() => setNamaHeader("Kanan")}   style={{ paddingHorizontal: 10, borderRadius: 10, justifyContent: 'center'}}>
            <Text style={{fontSize: 16, color: 'black'}}>Riwayat Sampah</Text>
            </TouchableOpacity>
            </View>
           
            </View>
        {/* //header */}

     
        </View>
        <View style={{backgroundColor: '#5FD068', height: '100%', width: '100%', marginTop: 10, borderTopLeftRadius: 26, borderTopRightRadius: 26, paddingHorizontal: 10, paddingVertical: 20}}>
        <View style={{alignItems: 'center'}}>
        <CardDetailSampah imgLeft={ICDiangkut} imgCenter={ICSwapGray} imgRight={ICNotAngkutDisabled} status="Telah Diangkut" />
        <CardDetailSampah imgLeft={ICDiangkutDisabled} imgCenter={ICSwap} imgRight={ICNotAngkutDisabled} status="Sedang Diangkut" />
        <CardDetailSampah imgLeft={ICDiangkutDisabled} imgCenter={ICSwapGray} imgRight={ICNotAngkut} status="Belum Diangkut" />
      
    
        </View>
   
        </View> 
        </>
       
       : null }
       {namaHeader =="Kanan" ? 
       <>
<View style={{paddingVertical: 24, paddingHorizontal: 16}}>
            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image source={ICLeft} style={{width: 35, height: 35, marginLeft: 10}} />
              </TouchableOpacity>
            <View style={{flexDirection: 'row', marginLeft: 24}}>
            <TouchableOpacity onPress={() => setNamaHeader("Kiri")} style={{ paddingHorizontal: 10, borderRadius: 10, justifyContent: 'center'}}>
            <Text style={{fontSize: 16, color: 'black'}}>Detail Sampah</Text>
            </TouchableOpacity>
         
            <TouchableOpacity style={{ backgroundColor:"#F5F4F4",paddingHorizontal: 10, borderRadius: 10, justifyContent: 'center'}}>
            <Text style={{fontSize: 16, color: 'black'}}>Riwayat Sampah</Text>
            </TouchableOpacity>
            </View>
           
            </View>
        {/* //header */}

     
        </View>
        <View style={{backgroundColor: '#5FD068', height: '100%', width: '100%', marginTop: 10, borderTopLeftRadius: 26, borderTopRightRadius: 26, paddingHorizontal: 10, paddingVertical: 20}}>
        <View style={{alignItems: 'center'}}>
        <CardRiwayatSampah imgLeft={ICDiangkut} imgCenter={ICSwapGray} imgRight={ICNotAngkutDisabled} status="Telah Diangkut" />
        <CardRiwayatSampah imgLeft={ICDiangkutDisabled} imgCenter={ICSwap} imgRight={ICNotAngkutDisabled} status="Sedang Diangkut" />
        <CardRiwayatSampah imgLeft={ICDiangkutDisabled} imgCenter={ICSwapGray} imgRight={ICNotAngkut} status="Belum Diangkut" />
      
    
        </View>
   
        </View> 
        </> : null
       }



          {/* //header */}
          
    </View>
  )
}

export default DetailSampah

const styles = StyleSheet.create({})