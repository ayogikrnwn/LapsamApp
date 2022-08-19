import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import ChooseUser from "../ChooseUser";
import DetailSampah from "../DetailSampah/DetailSampah";
import DetailOrder from "../DetailSampah/DetailOrder";

import Home from "../Home";
import Login from "../Login";
import LoginIuran from "../Login/LoginIuran";
import LoginPetugas from "../Login/LoginPetugas";

import Register from "../Register";
import uploadSampahMs from "../UploadSampah/uploadSampahMs";
import uploadSampahPs from "../UploadSampah/uploadSampahPs";
import CameraPage from "../UploadSampah/CameraPage";
// import Login from '../screen/Login';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Akun from "../Akun";
import AkunPetugas from "../Akun/AkunPetugas";
import Splash from "../Splash";
import UbahProfile from "../Akun/UbahProfile";
import UbahProfilePetugas from "../Akun/UbahProfilePetugas";
import AlamatUser from "../Akun/AlamatUser";
import DetailPembayaran from "../DetailSampah/DetailPembayaran";
import MyTabBar from "../components/MyTabBar";
import MyTabBarIuran from "../components/MyTabBar/MyTabBarIuran";
import MyTabBarPetugas from "../components/MyTabBar/MyTabBarPetugas";
import LupaPass from "../Login/LupaPass";
import HomePetugas from "../Home/HomePetugas";
import TambahAlamat from "../Akun/TambahAlamat";
import HomeIuran from "../Home/HomeIuran";
import Pembayaran from "../Pembayaran";
import RedeemPoint from "../Akun/RedeemPoint";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={Home} />
      {/* <Tab.Screen name="Upload" component={uploadSampahMs} /> */}
      <Tab.Screen name="Masukan" component={uploadSampahMs} />
      <Tab.Screen name="Riwayat" component={DetailSampah} />
      <Tab.Screen name="Pengaturan" component={Akun} />
    </Tab.Navigator>
  );
};
const MyTabsPetugas = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBarPetugas {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomePetugas} />
      {/* <Tab.Screen name="Upload" component={uploadSampahMs} /> */}

      <Tab.Screen name="Tugas" component={DetailOrder} />
      <Tab.Screen name="Pengaturan" component={AkunPetugas} />
    </Tab.Navigator>
  );
};

const MyTabsIuran = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBarIuran {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeIuran} />
      {/* <Tab.Screen name="Upload" component={uploadSampahMs} /> */}
      <Tab.Screen name="Detail" component={DetailPembayaran} />

      <Tab.Screen name="Pengaturan" component={AkunPetugas} />
    </Tab.Navigator>
  );
};
const Router = () => {
  const isLogin = useSelector((state) => state.data.dataUser);

  return (
    <Stack.Navigator initialRouteName="Splash">
      <>
        {isLogin ? (
          <></>
        ) : (
          <>
            <Stack.Screen
              name="SplashScreen"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChooseUser"
              component={ChooseUser}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LupaPass"
              component={LupaPass}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPetugas"
              component={LoginPetugas}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginIuran"
              component={LoginIuran}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
          </>
        )}
      </>

      <Stack.Screen
        name="MyTabs"
        component={MyTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyTabsPetugas"
        component={MyTabsPetugas}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyTabsIuran"
        component={MyTabsIuran}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailOrder"
        component={DetailOrder}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailSampah"
        component={DetailSampah}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailPembayaran"
        component={DetailPembayaran}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UploadSampahMS"
        component={uploadSampahMs}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="UploadSampahPS"
        component={uploadSampahPs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UbahProfile"
        component={UbahProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UbahProfilePS"
        component={UbahProfilePetugas}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AkunPetugas"
        component={AkunPetugas}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AlamatUser"
        component={AlamatUser}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TambahAlamat"
        component={TambahAlamat}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Pembayaran"
        component={Pembayaran}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RedeemPoint"
        component={RedeemPoint}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CameraPage"
        component={CameraPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
