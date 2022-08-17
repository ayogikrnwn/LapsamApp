import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent/HeaderComponent'
import ILPFoto from '../assets/pickfoto.png'
import InputText from '../Input/InputText'
import InputTextSampah from '../Input/InputTextSampah'
import ICSampah from '../assets/iconsampah.png'
import InputTextDisabled from '../Input/InputTextDisabled'
import ButtonSecondary from '../components/Button/ButtonSecondary'



const uploadSampahPs = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
        <HeaderComponent title="Angkut Sampah" />

    <TouchableOpacity style={{alignItems: 'center'}}>
    <Image source={ILPFoto} />
    </TouchableOpacity>
  
    <ScrollView >
  <View style={{height: '100%', backgroundColor: '#5FD068',  borderTopLeftRadius: 16, borderTopRightRadius: 16, paddingHorizontal: 16, paddingVertical: 16}}>



<View style={{marginTop: 10}}>
    
<Text style={{color: 'white', fontWeight: 'bold', fontSize: 14 }}>Nama</Text>
<Text style={{color: 'black', fontWeight: 'bold', fontSize: 16 }}>Jordi</Text>


<Text style={{color: 'white', fontWeight: 'bold', fontSize: 14, marginTop: 10 }}>Alamat</Text>
<Text style={{color: 'black', fontWeight: 'bold', fontSize: 16 }}>Jl. Lorem Ipsum</Text>


<Text style={{color: 'white', fontWeight: 'bold', fontSize: 14, marginTop: 10 }}>Nomor Handphone</Text>
<Text style={{color: 'black', fontWeight: 'bold', fontSize: 16 }}>082157538742</Text>

</View>

<View style={{flexDirection: 'row', marginTop: 20}}>
  <View>
  <View style={{flexDirection: 'row',marginTop: 10}}>
  <Image source={ICSampah} />
  <Text style={{color: 'white', fontWeight: 'bold', marginLeft: 18, fontSize: 16}}>Kecil</Text>
</View>
<View style={{flexDirection: 'row',marginTop: 20}}>
  <Image source={ICSampah} />
  <Text style={{color: 'white', fontWeight: 'bold', marginLeft: 18, fontSize: 16}}>Sedang</Text>
</View>
<View style={{flexDirection: 'row',marginTop: 20}}>
  <Image source={ICSampah} />
  <Text style={{color: 'white', fontWeight: 'bold', marginLeft: 18, fontSize: 16}}>Besar</Text>
</View>
  </View>

  <View>
    <View > 
    <InputTextDisabled />
    </View>
  
  <View style={{marginTop: 30}}>
  <InputTextDisabled />
  </View>
 
  <View style={{marginTop: 30}}>
  <InputTextDisabled />
  </View>


  </View>

</View>


<View style={{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
<ButtonSecondary title="Angkut"/>
</View>



</View>
</ScrollView>
   
    
    

    </View>
  )
}

export default uploadSampahPs

const styles = StyleSheet.create({})