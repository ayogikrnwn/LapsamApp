import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ICLeft from '../../assets/left.png'

const HeaderComponent = ({title}) => {
  return (
    <View style={{height: 80, backgroundColor: 'white', justifyContent: 'center', borderRadius: 15}}>
        <View style={{flexDirection: 'row', }}>
          <Image source={ICLeft} style={{width: 35, height: 35, marginLeft: 10}} />
      <Text style={{textAlign: 'center', flex: 1, fontSize: 20, color: '#232323', marginLeft: -30, fontWeight: '400', alignItems: 'center'}}>{title}</Text>
        </View>
       
    </View>
  )
}

export default HeaderComponent

const styles = StyleSheet.create({})