import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { fonts, colors } from '../../../utils';
import {Gap} from '../../atoms';

const Berita = ({title, kategoriBerita, subkategoriBerita, waktu, isiBerita}) => {
    //belum dimasukin props untuk image
    return (
        <View style={styles.page}>
            <Text style={styles.titleBerita}>{title}</Text>
            <Gap height={16}/>
            <View style={styles.contPenulis}>
                <View style={styles.ketBerita}>
                    <Text style={styles.keterangan}>{kategoriBerita}</Text>
                    <Text style={styles.keterangan}>-</Text>
                    <Text style={styles.keterangan}>{subkategoriBerita}</Text>
                </View>    
                    <Gap height={5}/>
                    <Text style={styles.waktu}>{waktu}</Text>
            </View>
            <Gap height={24}/>
            <View style={styles.beritaImage}>
                <Image
                style={styles.image}
                source={require('../../../assets/event.png')}
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
        flexDirection: 'column',

    },
    ketBerita: {
        flexDirection: 'row',
    },
    logo: {
        height: 40,
        width: 40,
        resizeMode: 'cover',
        borderRadius: 20,
        alignSelf: 'center',
        marginRight: 16,
      },
      keterangan: {
          fontSize: 14,
          fontFamily: fonts.primary.semibold,
          color: colors.text.primary,
          marginRight: 5,
      },
      waktu: {
        fontSize: 12,
        fontFamily: fonts.primary.semibold,
        color: colors.text.tertiary,
      },
      image: {
        maxHeight: 175,
        maxWidth: 350,
        resizeMode: 'cover',
        borderRadius: 5,
      },
      isiBerita: {
          fontSize: 18,
          fontFamily: fonts.primary.reguler,
          color: colors.text.primary,
      }
});