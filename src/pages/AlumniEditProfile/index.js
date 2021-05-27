import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Headers, ProfileUser} from '../../components/moleculs/';
import {Gap, Inputs, Buttons} from '../../components/atoms/';
import {
  fonts,
  colors,
  notifications,
  checkValue,
  destroyData,
} from '../../utils';
import {Icon} from 'native-base';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {BASE_URL_ROOT} from '@env';
import {api} from '../../services';

const AlumniEditProfile = ({navigation, route}) => {
  const payload = route.params;
  const [profile, setProfile] = useState({...payload, password: ''});
  const pathImage = `${BASE_URL_ROOT}${profile.image}`;
  const [photo, setPhoto] = useState(pathImage);
  const [profileImage, setProfileImage] = useState('');

  const getImage = () => {
    launchImageLibrary(
      {quality: 0.3, minHeight: 110, minWidth: 110, includeBase64: true},
      response => {
        if (response.didCancel || response.errorMessage) {
          notifications(
            'warning',
            'oops, sepertinya anda tidak jadi upload foto ?',
          );
          setPhoto(pathImage);
        } else {
          const source = `data:${response.type};base64,${response.base64}`;
          setPhoto(source);
          setProfileImage(source);
        }
      },
    );
  };

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const checkValueNull = () => {
    checkValue(profile.email, 'email');
    checkValue(profile.password, 'password');
    checkValue(profile.name, 'nama');
    checkValue(profile.phone, 'nomor telepon');
    checkValue(profile.nim, 'npm');
    checkValue(profile.faculty, 'fakultas');
    checkValue(profile.prodi, 'program studi');
    checkValue(profile.level, 'angkatan');
    checkValue(profile.graduated, 'tahun lulus');
  };
  const onSave = async () => {
    await checkValueNull();
    const dataEditProfile = {...profile, image: profileImage};
    api.updateProfileUser(dataEditProfile, profile._id).then(
      async res => {
        notifications(
          'success',
          'data profile berhasil diubah silahkan login kembali',
        );
        destroyData();
        navigation.replace('Masuk');
      },
      err => console.log('isi data :', dataEditProfile, err),
    );
  };
  return (
    <View>
      <View style={styles.contHeader}>
        <Headers
          type="sub-edit"
          title="Edit Profil"
          namaButton="SIMPAN"
          onPressBack={() => navigation.goBack()}
          onPressRight={() => onSave()}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.page}>
          <Gap height={24} />
          <TouchableOpacity
            onPress={() => getImage()}
            style={styles.profileWrapper}>
            <Image style={styles.photoUser} source={{uri: photo}} />
            <View>
              <Image
                style={styles.iconAdd}
                source={require('../../assets/addImage.png')}
              />
            </View>
          </TouchableOpacity>
          <Gap height={24} />
          <View>
            <Text style={styles.section}>Informasi Personal</Text>
            <Inputs
              value={profile.email}
              onChangeText={value => changeText('email', value)}
              title="Email"
              placeholder="Masukkan Email"
            />
            <Gap height={24} />
            <Inputs
              value={profile.password}
              secure
              onChangeText={value => changeText('password', value)}
              title="Password"
              placeholder="Masukkan Password"
            />
            <Gap height={24} />
            <Inputs
              value={profile.name}
              onChangeText={value => changeText('name', value)}
              title="Nama Lengkap"
              placeholder="Masukkan Nama Lengkap"
            />
            <Gap height={24} />
            <Inputs
              value={profile.phone}
              onChangeText={value => changeText('phone', value)}
              title="Nomor Telepon"
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
              value={profile.nim}
              onChangeText={value => changeText('nim', value)}
              title="Nomor Pokok Mahasiswa"
              placeholder="Masukkan Nomor Pokok Mahasiswa"
            />
            <Gap height={24} />
            {/* ini harusnya bentuk pilihan!! */}
            <Inputs
              value={profile.faculty}
              onChangeText={value => changeText('faculty', value)}
              title="Fakultas"
              placeholder="Masukkan Fakultas"
            />
            <Gap height={24} />
            <Inputs
              value={profile.prodi}
              onChangeText={value => changeText('prodi', value)}
              title="Program Studi"
              placeholder="Masukkan Program Studi"
            />
            <Gap height={24} />
            <Inputs
              value={profile.level}
              onChangeText={value => changeText('level', value)}
              title="Angkatan"
              placeholder="Masukkan Angkatan"
            />
            <Gap height={24} />
            <Inputs
              value={profile.graduated}
              onChangeText={value => changeText('graduated', value)}
              title="Tahun Lulus"
              placeholder="Masukkan Tahun Lulus"
            />
          </View>
          <Gap height={24} />
          {/* Button yg kalo ditambahin bakal nambah fieldnya sendiri */}
          {/* <View style={styles.contTambah}>
            <Buttons status="quarternary" title="+ Tambah Pendidikan" />
          </View> */}
          <Gap height={88} />
          {/* <View>
                <Link title="+ Tambah Pendidikan" type='secondary'/>
            </View> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default AlumniEditProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 24,
    paddingRight: 20,
  },
  profileWrapper: {
    height: 80,
    width: 80,
    alignSelf: 'center',
  },
  photoUser: {
    height: 80,
    width: 80,
    resizeMode: 'cover',
    borderRadius: 40,
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
  contTambah: {
    alignSelf: 'flex-start',
  },
});
