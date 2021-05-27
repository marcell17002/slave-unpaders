import React from 'react';
import {StyleSheet, View, Image, ScrollView, Text} from 'react-native';
import {Buttons, Gap, Inputs, Link} from '../../components/atoms';
import {api} from '../../services';
import {
  fonts,
  colors,
  useForm,
  checkValue,
  notifications,
  storeData,
  getData,
} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';

const Masuk = ({navigation}) => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const [form, setForm] = useForm({
    email: 'qwerty@gmail.com',
    password: 'qwerty123',
  });
  const checkValueNull = () => {
    checkValue(form.email, 'email');
    checkValue(form.password, 'password');
  };
  const onLog = async () => {
    await checkValueNull();
    api.postLogIn(form).then(
      async res => {
        const status = res.data.status;
        notifications('success', 'login berhasil');
        dispatch({type: 'SET_PROFILE', value: res.data});
        await storeData('user', res.data);
        if (status === 'alumni') navigation.replace('MainAppGraduated');
        else if (status === 'mahasiswa') navigation.replace('MainAppCollege');
        else navigation.replace('MainAppCollege');
      },
      err => {
        notifications('danger', 'email atau password salah');
      },
    );
  };
  return (
    <View style={styles.page}>
      <View style={styles.contImage}>
        <Image
          source={require('../../assets/LogoBesar.png')}
          style={StyleSheet.image}
        />
        <Text style={styles.title}>Masuk</Text>
      </View>
      <Gap height={52} />
      <View style={styles.inputan}>
        <Inputs
          title="Email"
          value={form.email}
          onChangeText={value => setForm('email', value)}
          placeholder="Masukkan Email"
        />
        <Gap height={24} />
        <Inputs
          title="Password"
          secure
          value={form.password}
          onChangeText={value => setForm('password', value)}
          placeholder="Masukkan Password"
        />
      </View>
      <Gap height={80} />
      <View style={styles.button}>
        <Buttons title="Masuk" onPress={() => onLog()} />
        <Text style={styles.buttonlink}>Belum punya Akun?</Text>
        <Link
          onPress={() => navigation.navigate('Daftar')}
          title="Daftar disini"
        />
      </View>
    </View>
    //</ScrollView>
  );
};

export default Masuk;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  contImage: {
    marginTop: 100,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginTop: 12,
    textAlign: 'center',
    color: colors.text.primdonker2,
    fontFamily: fonts.primary.bold,
  },
  inputan: {
    paddingLeft: 24,
    paddingRight: 20,
    marginBottom: 28,
  },
  button: {
    paddingLeft: 24,
    paddingRight: 20,
  },
  buttonlink: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fonts.primary.reguler,
    color: colors.text.tertiary,
    marginTop: -8,
  },
});
