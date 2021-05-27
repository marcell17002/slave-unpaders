import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Headers, Kategori, Event} from '../../components/moleculs';
import {api} from '../../services';
import {filterData, notifications} from '../../utils';
import moment from 'moment';

const AlumniHome = ({navigation}) => {
  const [event, setEvent] = useState([]);
  const [tempEvent, setTempEvent] = useState([]);

  useEffect(() => {
    api.getEvent().then(
      res => {
        setEvent(res.data);
        setTempEvent(res.data);
      },
      err => notifications('danger', 'no internet connection'),
    );
  }, []);

  const filterDataEvent = async props => {
    const filteredData = await filterData(tempEvent, 'category', props);
    await setEvent(filteredData);
  };
  return (
    <View style={styles.page}>
      <Headers title="Home" type="main-search" />

      <View style={styles.kategori}>
        <Kategori
          onPress={() => setEvent(tempEvent)}
          pict={require('../../assets/KatSemua.png')}
          title="Semua"
        />
        <Kategori
          onPress={() => filterDataEvent('umum')}
          pict={require('../../assets/KatAktual.png')}
          title="Aktual"
        />
        <Kategori
          onPress={() => filterDataEvent('hobi')}
          pict={require('../../assets/KatAlumni.png')}
          title="Alumni"
        />
        <Kategori
          onPress={() => filterDataEvent('lapak')}
          pict={require('../../assets/KatLapak.png')}
          title="Lapak"
        />
        <Kategori
          onPress={() => filterDataEvent('loker')}
          pict={require('../../assets/KatLoker.png')}
          title="Loker"
        />
      </View>

      <ScrollView style={styles.event}>
        {event.map(item => {
          return (
            <Event
              category={item.category}
              time={moment(item.createdAt).fromNow()}
              title={item.title}
              author={item.author.name}
              onPress={() => navigation.navigate('AlumniDetailBerita', item)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default AlumniHome;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  kategori: {
    flexDirection: 'row',
    marginLeft: 24,
    marginVertical: 24,
  },
  event: {
    backgroundColor: 'white',
  },
});
