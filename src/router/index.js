import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Home,
  Chat,
  Berita,
  Akun,
  Splashscreen,
  Intro,
  Masuk,
  Daftar,
  AlumniDaftar,
  AlumniHome,
  AlumniChat,
  AlumniBerita,
  AlumniLainnya,
  AlumniDetailBerita,
  AlumniKomentar,
  AlumniProfileAuthor,
  AlumniProfileUser,
  AlumniEditProfile,
  AlumniTentangKami,
  AlumniKontak,
  AlumniDisclaimer,
  AlumniList,
  AlumniKontrib,
  AlumniTulisBerita,
  AlumniBeritaUnggah,
  AlumniChatting,
  MahasiswaDaftar,
} from '../pages';
//import {AlumniDaftar} from '../../../pages';
import {ABottomNavigator} from '../components/moleculs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="AlumniHome" component={AlumniHome} />
      <Tab.Screen name="Akun" component={Akun} />
    </Tab.Navigator>
  );
};
const MainAppCollege = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Akun" component={Akun} />
    </Tab.Navigator>
  );
};
const MainAppGraduated = () => {
  //buat alumni
  return (
    <Tab.Navigator tabBar={props => <ABottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={AlumniHome} />
      <Tab.Screen name="Chat" component={AlumniChat} />
      <Tab.Screen name="Berita" component={AlumniBerita} />
      <Tab.Screen name="Lainnya" component={AlumniLainnya} />
    </Tab.Navigator>
  );
};
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splashscreen">
      <Stack.Screen
        name="Splashscreen"
        component={Splashscreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Masuk"
        component={Masuk}
        options={{headerShown: false}}
      />
      {/* DAFTAR */}
      <Stack.Screen
        name="Daftar"
        component={Daftar}
        options={{headerShown: false}}
      />
      {/* Alumni */}
      <Stack.Screen
        name="AlumniDaftar"
        component={AlumniDaftar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniHome"
        component={AlumniHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniChat"
        component={AlumniChat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniBerita"
        component={AlumniBerita}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniLainnya"
        component={AlumniLainnya}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniDetailBerita"
        component={AlumniDetailBerita}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniKomentar"
        component={AlumniKomentar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniProfileAuthor"
        component={AlumniProfileAuthor}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniProfileUser"
        component={AlumniProfileUser}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniEditProfile"
        component={AlumniEditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniTentangKami"
        component={AlumniTentangKami}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniKontak"
        component={AlumniKontak}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniDisclaimer"
        component={AlumniDisclaimer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniList"
        component={AlumniList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniKontrib"
        component={AlumniKontrib}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniTulisBerita"
        component={AlumniTulisBerita}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniBeritaUnggah"
        component={AlumniBeritaUnggah}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniChatting"
        component={AlumniChatting}
        options={{headerShown: false}}
      />
      {/* Mahasiswa */}
      <Stack.Screen
        name="MahasiswaDaftar"
        component={MahasiswaDaftar}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Alumni"
        component={Alumni}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainAppCollege"
        component={MainAppCollege}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainAppGraduated"
        component={MainAppGraduated}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
