import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import HeaderComponent from '../components/HeaderComponent/HeaderComponent'
import DropDownPicker from 'react-native-dropdown-picker';
import ButtonSecondary from '../components/Button/ButtonSecondary';


const Transaksi = ({navigation}) => {
  const [openKursi, setOpenKursi] = useState(false);
  const [valueKursi, setValueKursi] = useState(null);
  const [openPay, setOpenPay] = useState(false);
  const [valuePay, setValuePay] = useState(null);

  console.log('openasal', openKursi);
  const [kursi, setKursi] = useState([
    {label: 'A1', value: 'A1',   },
    {label: 'B1', value: 'B1'},
    {label: 'C1', value: 'C1'},
    {label: 'D1', value: 'D1'},
    {label: 'E1', value: 'E1'},
    {label: 'F1', value: 'F1'}
  ]);

  const [pay, setPay] = useState([
    {label: 'BNI Virtual Account', value: 'BNI',   },
    {label: 'BCA Virtual Account', value: 'BCA'},
    {label: 'BRI Virtual Account', value: 'BRI'},
   
  ]);
  return (
    <View>
         <HeaderComponent title="Transaksi"/>
         <View style={{paddingHorizontal: 16, paddingVertical: 10}}>

      <Text style={{fontSize: 20, color: '#155E9F', fontWeight: 'bold'}}>Pilih Kursi</Text>
      <Text style={{fontSize: 14, color: '#155E9F'}}>Silahkan Pilih Kursi</Text>
<View style={{marginTop: 10}}>
<DropDownPicker
      placeholder="Silahkan pilih Kursi"
      open={openKursi}
      value={valueKursi}
      items={kursi}
      setOpen={setOpenKursi}
      setValue={setValueKursi}
      setItems={setKursi}
    />
</View>
     <View style={{width: '100%', borderWidth: 1, borderColor: '#C3C3C3', marginTop: 20}}></View>
     <View style={{marginTop: 20}}>
     <Text style={{fontSize: 20, color: '#155E9F', fontWeight: 'bold'}}>Pembayaran</Text>
     <Text style={{fontSize: 14, color: '#155E9F'}}>Silahkan Selesaikan Pembayaran</Text>
<View style={{flexDirection: 'row', justifyContent:'center'}}>
<View style={{marginTop: 16}}>
     <Text style={{fontSize: 16, color: '#155E9F', fontWeight: 'bold'}}>Harga Tiket</Text>
     <Text style={{fontSize: 16, color: '#155E9F', fontWeight: 'bold'}}>Jumlah Tiket</Text>
     <Text style={{fontSize: 16, color: '#155E9F', fontWeight: 'bold'}}>Total Tiket</Text>
     </View>
     <View style={{marginTop: 16, marginLeft: 60}}>
     <Text style={{fontSize: 16, color: '#155E9F', }}>Rp 400.000</Text>
     <Text style={{fontSize: 16, color: '#155E9F', }}>3</Text>
     <Text style={{fontSize: 16, color: '#155E9F', }}>Rp 1.200.000</Text>
     </View>
</View>
     
      {/* <Text style={{fontSize: 14, color: '#155E9F'}}>Silahkan Pilih Kursi</Text> */}
     </View>
     <View style={{width: '100%', borderWidth: 1, borderColor: '#C3C3C3', marginTop: 20}}></View>
        <View style={{marginTop: 20}}>
        <Text style={{fontSize: 20, color: '#155E9F', fontWeight: 'bold'}}>Metode Pembayaran</Text>
      <Text style={{fontSize: 14, color: '#155E9F'}}>Silahkan Pilih Pembayaran</Text>
<View style={{marginTop: 10}}>
<DropDownPicker
      placeholder="Silahkan pilih Metode Pembayaran"
      open={openPay}
      value={valuePay}
      items={pay}
      setOpen={setOpenPay}
      setValue={setValuePay}
      setItems={setPay}
    />
</View>
        </View>
         </View>
         <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
         <ButtonSecondary title="Lanjut" onPress={() => navigation.navigate('Pembayaran')}  />

         </View>
    </View>
  )
}

export default Transaksi

const styles = StyleSheet.create({})