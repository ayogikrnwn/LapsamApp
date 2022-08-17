import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent/HeaderComponent'
import ButtonSecondary from '../components/Button/ButtonSecondary'
import CardPembayaran from '../components/CardPembayaran'
import { RadioButton } from 'react-native-paper';


const Pembayaran = ({navigation}) => {
  const [checked, setChecked] = React.useState('first');
  const handleBayar = () => {
    alert('Pembayaran Sukses')
    navigation.navigate('Home')
  }
  
  return (
    <View>
        <HeaderComponent title="PEMBAYARAN" />
        <View style={{paddingHorizontal: 20,  paddingTop: 20, backgroundColor: '#5FD068', height: '100%'}}> 
        <CardPembayaran />
        <Text style={{color: 'white'}}>08251454354</Text>

        <View style={{marginTop: 16, marginLeft: 150, flexDirection:'row'}}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Tagihan  :</Text>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 24,  marginLeft: 20, marginTop: -10}}>Rp 100.000</Text>
        </View>
       <View style={{ marginTop:30,}}>
       <TouchableOpacity style={{width: 120, height: 50,borderRadius: 30, borderWidth: 1, borderColor: 'white' }}>
            <Text style={{textAlign: 'center', marginTop: 13, fontWeight: 'bold', color: 'white'}}>Sudah Dibayar</Text>
        </TouchableOpacity>
        <View style={{marginTop: 30}}>
          <View style={{flexDirection: 'row'}}>
          <RadioButton
        value="first"
        color="white"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <Text style={{fontSize: 16, color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Poin</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 30}}>
          <RadioButton
        value="second"
        color="white"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
      <Text style={{fontSize: 16, color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Tunai</Text>
          </View>
          <TouchableOpacity onPress={handleBayar} style={{width: 120, height: 50,borderRadius: 30, backgroundColor: 'white', marginTop: 30, marginLeft: 250 }}>
            <Text style={{textAlign: 'center', marginTop: 13, fontWeight: 'bold', color: '#5FD068'}}>Bayar</Text>
        </TouchableOpacity>
        </View>
       
       </View>
       
        </View> 
      
    </View>
  )
}

export default Pembayaran

const styles = StyleSheet.create({})