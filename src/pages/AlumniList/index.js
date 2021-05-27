import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Headers, Kategori, Event, ListAlumni} from '../../components/moleculs';
import {Gap, ListButton} from '../../components/atoms';
import {fonts, colors} from '../../utils';
import {api} from '../../services';
import {useSelector} from 'react-redux';

const AlumniList = ({navigation}) => {
  const [alumni, setAlumni] = useState([]);

  useEffect(() => {
    api.getUserByCategory('status', 'alumni').then(
      res => setAlumni(res.data),
      err => console.log('isi err : ', err),
    );
  }, []);
  return (
    <View>
      <View style={styles.contHeader}>
        <Headers
          title="Temukan Alumni"
          type="three-icon"
          onPressBack={() => navigation.goBack()}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.page}>
          {alumni.map(item => {
            return (
              <ListAlumni
                key={item._id}
                nama={item.name}
                picture={item.image}
                fakultas={item.faculty}
                jurusan={item.prodi}
                angkatan={item.level}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default AlumniList;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: '20%',
  },
});
