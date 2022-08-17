import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import ICLapsam from '../assets/logoLapSam.png';


const Splash = ({navigation}) => {
    useEffect(() => {
      
          setTimeout(() => {
                navigation.navigate('ChooseUser')
          }, 3000);
    })
  return (
    <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
     <Image source={ICLapsam} style={{width: 200, height: 80}} />
     <Text style={{fontSize: 16, color: 'black', fontWeight: '400', marginTop: 12}}>Aplikasi Pelaporan Sampah</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})