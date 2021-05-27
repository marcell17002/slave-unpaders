import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {
  Headers,
  Kategori,
  Event,
  ListAlumniChat,
} from '../../components/moleculs';
import {Gap, ListButton} from '../../components/atoms';
import {fonts, colors, useForm} from '../../utils';

const AlumniBerita = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <View>
          <Headers title="CHAT" type="main" />
        </View>

        <View style={styles.page}>
          <ListButton
            namaTombol="Ketentuan Kontributor"
            onPress={() => navigation.navigate('AlumniKontrib')}
          />
          <ListButton
            namaTombol="Tulis Berita"
            onPress={() => navigation.navigate('AlumniTulisBerita')}
          />
        </View>
        <View style={styles.ghap}>
          <Gap height={12} />
        </View>
        <Gap height={24} />
        <Text style={styles.sectionLainnya}>DAFTAR UNGGAH BERITA</Text>
        <Event
          category="AKTUAL"
          time="3 JAM YANG LALU"
          title="Irawati Hermawan: Penanganan Covid-19 Perlu Kolaborasi"
          author="Tim Unpaders"
          onPress={() => navigation.navigate('AlumniHome')}
        />
      </View>
    </ScrollView>
  );
};

export default AlumniBerita;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  ghap: {
    backgroundColor: colors.text.grey,
  },
  sectionLainnya: {
    fontSize: 16,
    fontFamily: fonts.primary.semibold,
    color: colors.text.primary,
    marginLeft: 24,
  },
});
