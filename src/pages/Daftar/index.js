//import { Link } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Image, Text, ScrollView} from 'react-native';
import {Buttons, Gap, Inputs, Link} from '../../components/atoms';
import {fonts, colors} from '../../utils';

const Daftar = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.contImage}>
        <Image
          source={require('../../assets/LogoBesar.png')}
          style={StyleSheet.image}
        />
        <Text style={styles.title}>Daftar</Text>
      </View>
      <Gap height={80} />
      <View style={styles.button}>
        <Buttons
          title="Daftar sebagai Alumni"
          onPress={() =>
            navigation.navigate('AlumniDaftar', {status: 'alumni'})
          }
        />
        <Buttons
          status="tertiary"
          title="Daftar sebagai Mahasiswa"
          onPress={() =>
            navigation.navigate('MahasiswaDaftar', {role: 'mahasiswa'})
          }
        />
        <Gap height={62} />
        <Text style={styles.buttonlink}>Sudah punya Akun?</Text>
        <Link
          onPress={() => navigation.navigate('Masuk')}
          title="Masuk disini"
        />
      </View>
    </View>
  );
};

export default Daftar;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  contImage: {
    marginTop: 100,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginTop: 12,
    textAlign: 'center',
    color: colors.text.primdonker2,
    fontFamily: fonts.primary.bold,
  },
  inputan: {
    paddingLeft: 24,
    paddingRight: 20,
    marginBottom: 28,
  },
  button: {
    paddingLeft: 24,
    paddingRight: 20,
  },
  buttonlink: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fonts.primary.reguler,
    color: colors.text.tertiary,
    marginTop: -8,
  },
});
