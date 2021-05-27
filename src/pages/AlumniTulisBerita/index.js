import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {Headers, CommentUser} from '../../components/moleculs';
import {Gap, Inputs} from '../../components/atoms';
import {checkValue, colors, fonts, notifications, useForm} from '../../utils';
import {useSelector} from 'react-redux';
import {api} from '../../services';
import {launchImageLibrary} from 'react-native-image-picker';

const AlumniTulisBerita = ({navigation}) => {
  const user = useSelector(state => state).user;
  const [photo, setPhoto] = useState();
  const [form, setForm] = useForm({
    title: '',
    image: '',
    category: '',
    subCategory: '',
    author: {
      id: user.id,
      name: user.name,
    },
    desc: '',
    status: 'waiting',
  });

  const getImage = () => {
    launchImageLibrary(
      {quality: 0.3, minHeight: 110, minWidth: 110, includeBase64: true},
      response => {
        if (response.didCancel || response.errorMessage) {
          notifications(
            'warning',
            'oops, sepertinya anda tidak jadi upload foto ?',
          );
        } else {
          const source = `data:${response.type};base64,${response.base64}`;
          setPhoto(source);
          setForm('image', source);
        }
      },
    );
  };
  const checkValueNull = () => {
    checkValue(form.title, 'judul');
    checkValue(form.category, 'kategory');
    checkValue(form.subCategory, 'sub kategori');
    checkValue(form.desc, 'isi berita');
    checkValue(form.image, 'foto');
  };
  const onSave = async () => {
    await checkValueNull();
    const dataEvent = {
      ...form,
      image: photo,
    };
    api.postEvent(dataEvent).then(
      res => {
        notifications(
          'success',
          'berita sukses dibuat, silahkan tunggu verifikasi admin',
        );
        navigation.navigate('MainAppGraduated', {screen: 'AlumniBerita'});
      },
      err => {
        const message = JSON.parse(err.response.request._response).data[0].msg;
        console.log('isi errr :', message);
        notifications('danger', message);
      },
    );
    console.log('isi event :', dataEvent);
  };
  return (
    <View>
      <View>
        <Headers
          type="sub-edit"
          title="Tulis Berita"
          namaButton="UNGGAH"
          onPressBack={() => navigation.goBack()}
          onPressRight={() => onSave()}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.page}>
          <Gap height={24} />
          <View>
            <Inputs
              value={form.title}
              onChangeText={value => setForm('title', value)}
              title="Judul"
              placeholder="Judul Berita"
            />
            <Gap height={24} />
            <Inputs title="Foto" placeholder="Pilih Foto" />
            <Gap height={24} />
            <TouchableOpacity
              onPress={() => getImage()}
              style={styles.eventWrapper}>
              <Image
                style={styles.photoEvent}
                source={
                  photo
                    ? {uri: photo}
                    : require('../../assets/default-image.png')
                }
              />
            </TouchableOpacity>
            <Gap height={24} />
            <Inputs
              value={form.category}
              onChangeText={value => setForm('category', value)}
              title="Kategori"
              placeholder="Pilih Kategori"
            />
            <Gap height={24} />
            <Inputs
              value={form.subCategory}
              onChangeText={value => setForm('subCategory', value)}
              title="Sub Kategori"
              placeholder="Pilih Sub Kategori"
            />
            <Gap height={24} />
            <Inputs
              value={form.desc}
              onChangeText={value => setForm('desc', value)}
              title="Isi Berita"
              placeholder="Masukkan isi berita"
            />
            <Gap height={100} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AlumniTulisBerita;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 24,
    paddingRight: 20,
  },
  eventWrapper: {
    height: 120,
  },
  photoEvent: {
    height: 120,
    width: '100%',
    borderRadius: 5,
    resizeMode: 'cover',
  },
  iconAdd: {
    //backgroundColor: colors.primary,
    height: 24,
    width: 24,
    resizeMode: 'cover',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
