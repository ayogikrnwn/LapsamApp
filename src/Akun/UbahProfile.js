import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import HeaderComponent from '../components/HeaderComponent/HeaderComponent'
import InputText from '../Input/InputText'
import ButtonPrimary from '../components/Button/ButtonPrimary'

const UbahProfile = ({navigation}) => {


    const handleRegister = () => {
     
        alert('Ubah Data Berhasil')
        navigation.navigate('Home')
   
  }


    const [registerInput, setRegisterInput] = useState({})
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
            <HeaderComponent title="Ubah Profile" />
            <View style={{flex: 1}}>
<ScrollView showsVerticalScrollIndicator={false}>
<View style={{alignItems:'center', marginTop: 60}}>

<InputText title="Nama"  
  onChangeText={(e) => setRegisterInput({
    ...registerInput,
    nama : e
})}/>
 <InputText title="Nomor Ponsel"  
  onChangeText={(e) => setRegisterInput({
    ...registerInput,
    emjail : e
})}/>
 <InputText title="Username"  
  onChangeText={(e) => setRegisterInput({
    ...registerInput,
    alamat : e
})}/>
 <InputText title="NIK"  
  onChangeText={(e) => setRegisterInput({
    ...registerInput,
    alamat : e
})}/>
    <InputText title="Alamat"  
  onChangeText={(e) => setRegisterInput({
    ...registerInput,
    alamat : e
})}/>
  
<InputText title="Kata Sandi"  secureText 
  onChangeText={(e) => setRegisterInput({
    ...registerInput,
    password : e
})}/>

 <ButtonPrimary title="Simpan" onPress={handleRegister} />
 <ButtonPrimary title="Lihat Alamat" onPress={() =>  navigation.navigate('AlamatUser')} />

 
      </View>
     
</ScrollView>
       
    </View>
    </View>
    
    )
  }

export default UbahProfile

const styles = StyleSheet.create({})