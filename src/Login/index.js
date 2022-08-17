import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ICBassets from '../assets/backasset.png'
import ICLapsam from '../assets/logoLapSam.png';
import InputText from '../Input/InputText'
import ButtonPrimary from '../components/Button/ButtonPrimary'
import HeaderComponent from '../components/HeaderComponent/HeaderComponent'
import axios from 'axios';
import APIUrl from '../config/APIUrl'

const Login  = ({navigation}) => {
  const [loginInput, setLoginInput] = useState({})
    console.log(loginInput);

    const handleLogin = async () => {
      console.log('login');
      navigation.navigate('MyTabs')
      // try {
      //   await axios.post(
      //     `${APIUrl}/masyarakat/login`,
      //     {
      //       username: loginInput.username,
      //       password: loginInput.password
      //     },
        
          
      //   ).then((res) => {
      //     navigation.navigate('MyTabs')
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
 
  <Text style={{color: 'black'}}>Belum Punya Akun?</Text>
  <TouchableOpacity style={{marginBottom: 30}} onPress={() => navigation.navigate('Register')} >
    <Text style={{fontWeight: 'bold', color: '#5FD068'}}> 
      Klik Disini
    </Text>
  </TouchableOpacity>

   <ButtonPrimary title="Login" onPress={handleLogin} />
  
   
        </View>
       
    </View>
    </View>
  )
}

export default Login 

const styles = StyleSheet.create({})