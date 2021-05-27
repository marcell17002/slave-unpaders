//import { Button } from 'native-base';
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { fonts, colors } from '../../../utils';
import {Gap, Buttons} from '../../atoms';

const Comment = ({image, author, waktu, desc, onPress}) => {
  return (
    <View style={styles.page}>
      <View style={styles.contComment}>
        <Image
          style={styles.logo}
          source={require('../../../assets/LogoUnpadersKecil.png')}
        />
        <View style={styles.ketPenulis}>
          <Text style={styles.penulis}>{author}</Text>
          <Gap height={5}/>
          <Text style={styles.waktu}>{waktu}</Text>
        </View>
        <Gap width={24}/>
        <Buttons
          status="quarternary" title="Lihat Profile" onPress={onPress}/>
      </View>
      <Gap height={24}/>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  page: {
    marginLeft: 24, 
    marginRight: 20,
    backgroundColor: 'white',
  },
  contComment: {
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

  commentDetail: {
    marginLeft: '5%',
    flex: 1,
  },
  commentDetailInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
