import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ICBassets from '../assets/backasset.png'
import ICLapsam from '../assets/logoLapSam.png';
import InputText from '../Input/InputText'
import ButtonPrimary from '../components/Button/ButtonPrimary'
import HeaderComponent from '../components/HeaderComponent/HeaderComponent'


const LupaPass  = ({navigation}) => {
  const [loginInput, setLoginInput] = useState({})
    console.log(loginInput);

   
    const handleLogin = () => {
      console.log('login');
          navigation.navigate('MyTabsIuran')
     
    }

  return (
    <View style={{flex: 1}}>
  <Image source={ICBassets} />
          
          <View style={{marginTop: -120, marginLeft: 30}}>
             
         <Image source={ICLapsam} />
         <Text style={{color: 'black', marginLeft: 80, marginTop: -20}}>Lupa Password</Text>
          </View>
    <View style={{flex: 1}}>

        <View style={{alignItems:'center', marginTop: 70,}}>
       
  <InputText title="Username"  
    onChangeText={(e) => setLoginInput({
      ...loginInput,
      username : e
  })}/>
  <InputText title="Password"    secureText 
    onChangeText={(e) => setLoginInput({
      ...loginInput,
      password : e
  })}/>
 

   <ButtonPrimary title="Lanjutkan" onPress={handleLogin} />
  
   
        </View>
       
    </View>
    </View>
  )
}

export default LupaPass 

const styles = StyleSheet.create({})