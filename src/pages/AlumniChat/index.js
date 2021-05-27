import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  Headers,
  Kategori,
  Event,
  ListAlumniChat,
} from '../../components/moleculs';
import {Gap, ListButton} from '../../components/atoms';
import {fonts, colors} from '../../utils';
import {api} from '../../services';
import {useSelector} from 'react-redux';

const AlumniChat = ({navigation}) => {
  const [history, setHistory] = useState([]);
  const [historyTemp, setHistoryTemp] = useState([]);
  const user = useSelector(state => state).user;

  useEffect(() => {
    getHistory('idSender');
    getHistory('idReceiver');
  }, []);

  const getHistory = type => {
    api.getHistoryChat(type, user.id).then(
      async res => {
        const historyChat = res.data;
        const data = [];
        const promises = await Object.keys(historyChat).map(async key => {
          await api.getProfileUser(historyChat[key].idSender).then(
            async res => {
              await data.push({
                id: key,
                name: res.data[0].name,
                image: res.data[0].image,
                ...historyChat[key],
              });
            },
            err => console.log('isi error :', err),
          );
        });
        await Promise.all(promises);
        // console.log(`data ${type}: `, data);
        if (type === 'idSender') await setHistory(data);
        else if (type === 'idReceiver') await setHistoryTemp(data);
      },
      err => console.log('isi errhist : ', err),
    );
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <View>
          <Headers title="CHAT" type="main" />
        </View>
        <View style={styles.page}>
          <View>
            <ListButton
              namaTombol="Temukan Alumni"
              onPress={() => navigation.navigate('AlumniList')}
            />
          </View>
          <View style={styles.ghap}>
            <Gap height={12} />
            <Text style={styles.textGap}>CHAT</Text>
            <Gap height={12} />
          </View>
          <View>
            {history.map(item => {
              return (
                <ListAlumniChat
                  key={item._id}
                  nama={item.name}
                  picture={item.image}
                  lastText={item.lastChat}
                  onPress={() => navigation.navigate('AlumniChatting')}
                />
              );
            })}
            <Text>paired</Text>
            {historyTemp.map(item => {
              return (
                <ListAlumniChat
                  key={item._id}
                  nama={item.name}
                  picture={item.image}
                  lastText={item.lastChat}
                  onPress={() => navigation.navigate('AlumniChatting')}
                />
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default AlumniChat;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  ghap: {
    backgroundColor: colors.text.grey,
  },
  textGap: {
    marginLeft: 24,
    fontSize: 12,
    fontFamily: fonts.primary.reguler,
    color: colors.text.tertiary,
  },
});
