import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ICBassets from '../assets/backasset.png'
import ICLapsam from '../assets/logoLapSam.png';
import InputText from '../Input/InputText'
import ButtonPrimary from '../components/Button/ButtonPrimary'
import HeaderComponent from '../components/HeaderComponent/HeaderComponent'
import axios from 'axios';
import APIUrl from '../config/APIUrl'

const LoginIuran  = ({navigation}) => {
  const [loginInput, setLoginInput] = useState({})
    console.log(loginInput);

   
    const handleLogin = async () => {
      console.log('login');
      navigation.navigate('MyTabsIuran')
      //   await axios.post(
      //     `${APIUrl}/pengelola/login`,
      //     {
      //       username: loginInput.username,
      //       password: loginInput.password
      //     },
        
          
      //   ).then((res) => {
      //     navigation.navigate('MyTabIuran')
      //   })
      // } catch (error) {
      //     console.log('gagal', error.response.data);
      //     alert('Login Gagal')
      // }

        
     
     
    }

  return (
    <View style={{flex: 1}}>
  <Image source={ICBassets} />
          
          <View style={{marginTop: -120, marginLeft: 30}}>
             
         <Image source={ICLapsam} />
         <Text style={{color: 'black', marginLeft: 80, marginTop: -20}}>Petugas Iuran</Text>
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
 

   <ButtonPrimary title="Login" onPress={handleLogin} />
  
   
        </View>
       
    </View>
    </View>
  )
}

export default LoginIuran 

const styles = StyleSheet.create({})