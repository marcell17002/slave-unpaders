import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';

const Event = ({picture, category, time, title, author, onPress}) => {
  return (
    <TouchableOpacity style={styles.event} onPress={onPress}>
      <View style={styles.eventImage}>
        <Image
          style={styles.image}
          source={require('../../../assets/event.png')}
        />
      </View>
      <View style={styles.eventDetail}>
        <View style={styles.eventTimeDetail}>
          <Text style={styles.KategoriWaktu}>{category}</Text>
          <Text> - </Text>
          <Text style={styles.KategoriWaktu}> {time}</Text>
        </View>
        <View style={styles.title}>
          <Text style={styles.Judul}>{title}</Text>
        </View>
        <View style={styles.eventCreatorDetail}>
          <Image
            style={styles.logo}
            source={require('../../../assets/LogoUnpadersKecil.png')}
          />
          <Text style={styles.penulis}>{author}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Event;

const styles = StyleSheet.create({
  event: {
    flexDirection: 'row',
    //marginBottom: 24,
    paddingVertical: 24,
    paddingLeft: 24,
    paddingRight: 20,
  },
  image: {
    height: 120,
    width: 140,
    resizeMode: 'cover',
    borderRadius: 5,
    alignSelf: 'center',
  },
  logo: {
    height: 16,
    width: 16,
    resizeMode: 'cover',
    borderRadius: 8,
    alignSelf: 'center',
    marginRight: 10,
  },
  title: {
    flexShrink: 1,
  },
  eventDetail: {
    flex: 1,
    marginLeft: '5%',
    flexDirection: 'column',
  },
  eventTimeDetail: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  KategoriWaktu: {
    fontSize: 12,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primdonker2,
  },
  eventCreatorDetail: {
    flexDirection: 'row',
  },
  Judul: {
    fontSize: 18,
    fontFamily: fonts.primary.reguler,
    color: colors.text.title,
  },
  title: {
    marginVertical: 8,
  },
  penulis: {
    fontSize: 12,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
    textAlignVertical: 'center',
  },
});
