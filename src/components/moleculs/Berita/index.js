import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {fonts, colors} from '../../../utils';
import {Gap} from '../../atoms';
import {BASE_URL_ROOT} from '@env';
const Berita = ({title, author, waktu, isiBerita, images}) => {
  //belum dimasukin props untuk image
  return (
    <View style={styles.page}>
      <Text style={styles.titleBerita}>{title}</Text>
      <Gap height={24} />
      <View style={styles.contPenulis}>
        <Image
          style={styles.logo}
          source={require('../../../assets/LogoUnpadersKecil.png')}
        />
        <View style={styles.ketPenulis}>
          <Text style={styles.penulis}>{author}</Text>
          <Gap height={5} />
          <Text style={styles.waktu}>{waktu}</Text>
        </View>
      </View>
      <Gap height={24} />
      <View style={styles.beritaImage}>
        <Image
          style={styles.image}
          source={{uri: `${BASE_URL_ROOT}/${images}`}}
        />
      </View>
      {/* <Gap height={24}/> */}
      <Text style={styles.isiBerita}>{isiBerita}</Text>
    </View>
  );
};

export default Berita;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    marginLeft: 24,
    marginRight: 20,
  },
  titleBerita: {
    fontSize: 24,
    fontFamily: fonts.secondary.semibold,
    color: colors.text.title,
  },
  contPenulis: {
    flexDirection: 'row',
  },
  ketPenulis: {
    flexDirection: 'column',
  },
  logo: {
    height: 40,
    width: 40,
    resizeMode: 'cover',
    borderRadius: 20,
    alignSelf: 'center',
    marginRight: 16,
  },
  penulis: {
    fontSize: 14,
    fontFamily: fonts.primary.semibold,
    color: colors.text.primary,
  },
  waktu: {
    fontSize: 12,
    fontFamily: fonts.primary.semibold,
    color: colors.text.tertiary,
  },
  image: {
    height: 175,
    width: 350,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  isiBerita: {
    fontSize: 18,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
  },
});
