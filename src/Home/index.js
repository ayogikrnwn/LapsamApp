import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import HeaderHome from '../components/HeaderComponent/HeaderHome'
import ILPhoto from '../assets/dummyphoto.png'
import ICDone from '../assets/done.png';
import CardStatusSampah from '../components/CardStatusSampah';
import ICSwap from '../assets/swap.png'
import ICFail from '../assets/fail.png'
import ICLengkap from '../assets/right.png'
import ILSampah from '../assets/masukansampah.png'
import ILNews from '../assets/ilnews.png'
import axios from 'axios';
import APIUrlSampah from '../config/APIUrlSampah'


const Home = ({navigation}) => {

const [listSampah, setListSampah] = useState([])
  
const getSampah = async () => {
    // try {
      //   await axios.post(
      //     `${APIUrlSampah}/masyarakat/login`,
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

  

    <View  style={{flex:1 }}>

      

      <HeaderHome />
     


<View style={styles.wrapper}>
  <ScrollView>

  
    <Text style={styles.txtTgl}>11 Juli 2022</Text>
    
    <View style={{paddingHorizontal: 20, marginTop: 40}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={styles.txtLight}>Sampah Terakhir Kamu</Text>
      <Text style={styles.txtLight}>Status</Text>
      </View>


  <CardStatusSampah img={ICDone} />
  <CardStatusSampah img={ICSwap} />
  <CardStatusSampah img={ICFail} />

<TouchableOpacity style={{flexDirection: 'row', marginTop: 10}} onPress={() => navigation.navigate('DetailSampah')}>
<Text>Lebih Lengkap</Text>
<Image source={ICLengkap} style={{  width: 15, height: 15, marginTop: 5, marginLeft: 5}} />
</TouchableOpacity>

<TouchableOpacity style={{flexDirection: 'row', marginTop: 22}} onPress={() => navigation.navigate('UploadSampahMS')}>
    <Image source={ILSampah} />
    <Text style={ { fontSize: 16, color: 'white', marginTop: 12, marginLeft: 10}}>Masukan Sampah Kamu</Text>
</TouchableOpacity>

<View style={{marginTop: 14}}>
 
  <Text style={ { fontSize: 16, color: 'white', marginTop: 12, marginLeft: 10, fontWeight: 'bold'}}>News</Text>
</View>
<ScrollView horizontal style={{marginTop: 14}} showsHorizontalScrollIndicator={false}>
  <View style={{marginLeft: 14}}>
  <Image source={ILNews} />
  <Text style={{fontSize: 14, color: 'white', fontWeight: 'bold'}}>Judul</Text>
  <Text style={{fontSize: 14, color: 'white', fontWeight: '200'}}>Deskripsi</Text>
  <Text style={{fontSize: 14, color: 'white', fontWeight: 'bold'}}>Selengkapnya...</Text>
  </View>

  <View style={{marginLeft: 14}}>
  <Image source={ILNews} />
  <Text style={{fontSize: 14, color: 'white', fontWeight: 'bold'}}>Judul</Text>
  <Text style={{fontSize: 14, color: 'white', fontWeight: '200'}}>Deskripsi</Text>
  <Text style={{fontSize: 14, color: 'white', fontWeight: 'bold'}}>Selengkapnya...</Text>
  </View>

  <View style={{marginLeft: 14}}>
  <Image source={ILNews} />
  <Text style={{fontSize: 14, color: 'white', fontWeight: 'bold'}}>Judul</Text>
  <Text style={{fontSize: 14, color: 'white', fontWeight: '200'}}>Deskripsi</Text>
  <Text style={{fontSize: 14, color: 'white', fontWeight: 'bold'}}>Selengkapnya...</Text>
  </View>

  


</ScrollView>

    </View>
  </ScrollView>
    
     </View>
 



    
   
     
    </View>
   
  )
}

export default Home

const styles = StyleSheet.create({
  wrapper: {backgroundColor: '#5FD068', height: '78%', borderTopLeftRadius: 16, borderTopRightRadius: 16, marginTop: -40},
  imgStyles: {borderWidth: 10, borderColor: 'white',  borderRadius: 80, marginTop: -70, marginLeft:10},
  txtTgl: {fontWeight: '200', fontSize: 14, color: 'black', alignSelf: 'flex-end', marginRight: 16, marginTop: 10},
  txtLight: {fontWeight: 'bold', fontSize: 14, color: 'white'}
})