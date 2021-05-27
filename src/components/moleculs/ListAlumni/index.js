import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';
import {BASE_URL_ROOT} from '@env';

const ListAlumni = ({nama, fakultas, jurusan, angkatan, onPress, picture}) => {
  return (
    <TouchableOpacity style={styles.page} onPress={onPress}>
      <Image
        style={styles.avatar}
        source={{uri: `${BASE_URL_ROOT}/${picture}`}}
      />
      <View>
        <Text style={styles.namaAlumni}>{nama}</Text>
        <Gap height={8} />
        <View style={styles.secData}>
          <Text style={styles.desc}>{fakultas}</Text>
          <Text style={styles.desc}>-</Text>
          <Text style={styles.desc}>{jurusan}</Text>
          <Text style={styles.desc}>{angkatan}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListAlumni;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.text.grey,
    alignItems: 'center',
  },
  avatar: {
    height: 40,
    width: 40,
    resizeMode: 'cover',
    borderRadius: 20,
    alignSelf: 'center',
    marginRight: 16,
  },
  namaAlumni: {
    fontSize: 16,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary.reguler,
    color: colors.text.tertiary,
    marginRight: 5,
  },
  secData: {
    flex: 1,
    flexDirection: 'row',
  },
});
