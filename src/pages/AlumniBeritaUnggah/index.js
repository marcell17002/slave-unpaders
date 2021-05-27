import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Headers, UnggahBerita} from '../../components/moleculs';
import {Gap} from '../../components/atoms';
import {colors, fonts} from '../../utils';

const AlumniBeritaUnggah = ({navigation}) => {
  return (
    <View>
      <View>
        <Headers
          type="sub-edit"
          title="Berita Terunggah"
          namaButton="EDIT"
          onPressBack={() => navigation.goBack()}
          onPressRight={() => navigation.navigate('AlumniBerita')}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.page}>
          <Gap height={24} />
          <UnggahBerita
            title="Universitas Padjadjaran, ptn Terfavorit 2021"
            kategoriBerita="Aktual"
            subkategoriBerita="Berita"
            waktu="SELASA, 23 FEBRUARI 2021 12:16"
            isiBerita="Universitas Padjadjaran alias UNPAD merupakan perguruan tinggi yang paling banyak dicari dan prioritas oleh para pendaftar SNMPTN 2021"
          />
          <Gap height={80} />
        </View>
      </ScrollView>
    </View>
  );
};

export default AlumniBeritaUnggah;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
});
