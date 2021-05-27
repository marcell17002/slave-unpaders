import React from 'react';
import {StyleSheet, View, Image, Text, ScrollView} from 'react-native';
import {Buttons, Gap, Inputs, Link} from '../../components/atoms';
import {api} from '../../services';
import {fonts, colors, useForm, checkValue, notifications} from '../../utils';
import {BASE_IMG} from '@env';

const AlumniDaftar = ({navigation, route}) => {
  const status = route.params.status;
  const [form, setForm] = useForm({
    email: '',
    password: '',
    name: '',
    phone: '',
    nim: '',
    faculty: '',
    prodi: '',
    level: '',
    graduated: '',
    image: BASE_IMG,
    status: status,
  });

  const checkValueNull = () => {
    checkValue(form.email, 'email');
    checkValue(form.password, 'password');
    checkValue(form.name, 'nama');
    checkValue(form.phone, 'nomor telepon');
    checkValue(form.nim, 'NPM');
    checkValue(form.faculty, 'fakultas');
    checkValue(form.prodi, 'prodi');
    checkValue(form.level, 'angkatan');
    checkValue(form.graduated, 'tahun lulus');
  };
  const onSave = async () => {
    await checkValueNull();
    api.postRegister(form).then(
      res => {
        notifications('success', 'registrasi berhasil silahkan login');
        navigation.replace('Masuk');
      },
      err => {
        const message = JSON.parse(err.response.request._response).message;
        console.log('isi errr :', JSON.parse(err.response.request._response));
        notifications('danger', message);
      },
    );
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <View style={styles.contImage}>
          <Image
            source={require('../../assets/LogoBesar.png')}
            style={StyleSheet.image}
          />
          <Text style={styles.title}>Daftar sebagai Alumni</Text>
        </View>
        <Gap height={40} />
        <View>
          <Text style={styles.section}>Informasi Personal</Text>
          <Inputs
            title="Email"
            value={form.email}
            onChangeText={value => setForm('email', value)}
            placeholder="Masukkan Email"
          />
          <Gap height={24} />
          <Inputs
            title="Password"
            value={form.password}
            secure
            onChangeText={value => setForm('password', value)}
            placeholder="Masukkan Password"
          />
          <Gap height={24} />
          <Inputs
            title="Nama Lengkap"
            value={form.name}
            onChangeText={value => setForm('name', value)}
            placeholder="Masukkan Nama Lengkap"
          />
          <Gap height={24} />
          <Inputs
            title="Nomor Telepon"
            isNumeric
            value={form.phone}
            onChangeText={value => setForm('phone', value)}
            placeholder="Masukkan Nomor Telepon"
          />
          <Text style={styles.note}>
            *Nomor WA tidak akan ditampilkan pada profile
          </Text>
          <Gap height={24} />
        </View>

        <Gap height={32} />
        <View>
          <Text style={styles.section}>Latar Belakang Pendidikan</Text>
          <Inputs
            title="Nomor Pokok Mahasiswa"
            value={form.npm}
            isNumeric
            onChangeText={value => setForm('nim', value)}
            placeholder="Masukkan Nomor Pokok Mahasiswa"
          />
          <Gap height={24} />
          {/* ini harusnya bentuk pilihan!! */}
          <Inputs
            title="Fakultas"
            value={form.faculty}
            onChangeText={value => setForm('faculty', value)}
            placeholder="Masukkan Fakultas"
          />
          <Gap height={24} />
          <Inputs
            title="Program Studi"
            value={form.study}
            onChangeText={value => setForm('prodi', value)}
            placeholder="Masukkan Program Studi"
          />
          <Gap height={24} />
          <Inputs
            title="Angkatan"
            value={form.level}
            isNumeric
            onChangeText={value => setForm('level', value)}
            placeholder="Masukkan Angkatan"
          />
          <Gap height={24} />
          <Inputs
            title="Tahun Lulus"
            isNumeric
            value={form.graduated}
            onChangeText={value => setForm('graduated', value)}
            placeholder="Masukkan Tahun Lulus"
          />
        </View>
        <Gap height={24} />
        {/* Button yg kalo ditambahin bakal nambah fieldnya sendiri */}
        {/* <View>
          <Link title="+ Tambah Pendidikan" type="secondary" />
        </View>
        <Gap height={50} /> */}
        <View>
          <Buttons title="Daftar" onPress={onSave} />

          <Text style={styles.buttonlink}>Sudah punya Akun?</Text>
          <Link
            onPress={() => navigation.navigate('Masuk')}
            title="Masuk disini"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default AlumniDaftar;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 24,
    paddingRight: 20,
  },
  contImage: {
    marginTop: 28,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginTop: 12,
    textAlign: 'center',
    color: colors.text.primdonker2,
    fontFamily: fonts.primary.bold,
  },
  section: {
    fontSize: 18,
    fontFamily: fonts.primary.semibold,
    color: colors.text.primary,
    marginBottom: 20,
  },
  note: {
    fontSize: 12,
    fontFamily: fonts.primary.reguler,
    color: colors.input.text,
    marginTop: 12,
  },
  buttonlink: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fonts.primary.reguler,
    color: colors.text.tertiary,
    marginTop: -8,
  },
});
