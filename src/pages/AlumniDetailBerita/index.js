import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import {
  Headers,
  Kategori,
  Event,
  Berita,
  Comment,
} from '../../components/moleculs';
import {Gap, Buttons} from '../../components/atoms';
import {
  fonts,
  colors,
  getDateName,
  notifications,
  filterData,
} from '../../utils';
import {api} from '../../services';
import {useSelector} from 'react-redux';

const AlumniChat = ({navigation, route}) => {
  const payload = route.params;
  const [author, setAuthor] = useState({});
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [countLike, setCountLike] = useState([]);
  const [countDislike, setCountDislike] = useState([]);
  const [idLike, setIdLike] = useState('');

  const user = useSelector(state => state).user;

  useEffect(() => {
    api.getProfileUser(payload.author.id).then(
      res => setAuthor(res.data[0]),
      err => notifications('danger', 'anda tidak terkoneksi dengan internet'),
    );
    api.getLikedEvent('eventId', payload._id).then(
      async res => {
        const filterStatusTrue = await filterData(res.data, 'status', true);
        setCountLike(filterStatusTrue); //counter like
        const filterStatusFalse = await filterData(res.data, 'status', false);
        setCountDislike(filterStatusFalse); //counter false
        const filteredData = await filterData(res.data, 'userId', user.id);
        if (filteredData.length > 0) {
          if (filteredData[0].status === true) setLike(true);
          else setDislike(true);
          setIdLike(filteredData[0]._id);
        }
      },
      err => {},
    );
  }, []);

  const updateValueLiked = () => {
    api.getLikedEvent('eventId', payload._id).then(
      async res => {
        const filterStatusTrue = await filterData(res.data, 'status', true);
        setCountLike(filterStatusTrue); //counter like
        const filterStatusFalse = await filterData(res.data, 'status', false);
        setCountDislike(filterStatusFalse); //counter false
      },
      err => {
        console.log('errror get liked : ', err);
      },
    );
  };

  const postCounter = async status => {
    const dataUserLikedEvent = {
      userId: user.id,
      eventId: payload._id,
      status: status,
    };
    await api.postLikedEvent(dataUserLikedEvent).then(
      res => {
        setIdLike(res.data._id);
      },
      err => console.log('errr post : ', err),
    );
    await updateValueLiked();
  };

  const updateCounter = async status => {
    const dataUserLikedEvent = {
      userId: user.id,
      eventId: payload._id,
      status: status,
    };
    await api.updateLikedEvent(dataUserLikedEvent, idLike).then(
      async res => {
        if (status === true) setLike(true), setDislike(false);
        else setLike(false), setDislike(true);
      },
      err => console.log('errr del: ', err),
    );
    await updateValueLiked();
  };

  const deleteCounter = async status => {
    await api.deleteLikedEvent(idLike).then(
      res => {
        if (status === true) setLike(false);
        else setDislike(false);
        updateValueLiked();
      },
      err => console.log('errr del: ', err),
    );
  };
  const rateEvent = type => {
    if (type === 'like') {
      if (dislike === true) {
        return updateCounter(true);
      } else if (like === true) {
        return deleteCounter(true);
      } else {
        setLike(true);
        postCounter(true);
      }
    } else {
      if (like === true) {
        return updateCounter(false);
      } else if (dislike === true) {
        return deleteCounter(false);
      } else {
        setDislike(true);
        postCounter(false);
      }
    }
  };
  return (
    <View style={styles.page}>
      <View>
        <Headers
          title="DETAIL BERITA"
          type="sub-main"
          onPressBack={() => navigation.goBack()}
        />
      </View>
      <View style={styles.rating}>
        <TouchableOpacity
          style={styles.like(like)}
          onPress={() => rateEvent('like')}>
          <Text>{countLike.length}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.disLike(dislike)}
          onPress={() => rateEvent('dislike')}>
          <Text>{countDislike.length}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Gap height={24} />
          <Berita
            title={payload.title}
            author={payload.author.name}
            waktu={getDateName(payload.createdAt)}
            isiBerita={payload.desc}
            images={payload.image}
          />
          <Gap height={24} />
        </View>
        <View style={styles.ghap}>
          <Gap height={12} />
        </View>
        <View>
          <Gap height={24} />
          <Comment
            author={payload.author.name}
            waktu={getDateName(payload.createdAt)}
            onPress={() => navigation.navigate('AlumniProfileAuthor', author)}
          />

          <View style={styles.secButtons}>
            <Buttons
              status="secondary"
              title="LIHAT KOMENTAR"
              onPress={() => navigation.navigate('AlumniKomentar')}
            />
            <Gap height={24} />
          </View>
        </View>

        <View style={styles.ghap}>
          <Gap height={12} />
        </View>
        <View>
          <Gap height={24} />
          <Text style={styles.sectionLainnya}>Berita Terbaru Lainnya</Text>
          <Event
            category="AKTUAL"
            time="3 JAM YANG LALU"
            title="Irawati Hermawan: Penanganan Covid-19 Perlu Kolaborasi"
            author="Tim Unpaders"
            onPress={() => navigation.navigate('AlumniHome')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default AlumniChat;

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  like: like => ({
    width: 50,
    height: 50,
    backgroundColor: like ? '#b3d1ff' : '#dadada',
  }),
  disLike: disLike => ({
    width: 50,
    height: 50,
    backgroundColor: disLike ? '#ffb3b3' : '#dadada',
  }),
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  ghap: {
    backgroundColor: colors.text.grey,
  },
  sectionLainnya: {
    fontSize: 20,
    fontFamily: fonts.primary.semibold,
    color: colors.text.primary,
    marginLeft: 24,
  },
  secButtons: {
    marginLeft: 24,
    marginRight: 20,
  },
});
