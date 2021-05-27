import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Headers, ProfileUser} from '../../components/moleculs/';
import {Gap} from '../../components/atoms/';
import {fonts, colors, notifications} from '../../utils';
import {useSelector} from 'react-redux';
import {api} from '../../services';

const AlumniProfileUser = ({navigation}) => {
  const user = useSelector(state => state).user;
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    api.getProfileUser(user.id).then(
      res => {
        setProfile(res.data[0]);
        console.log('image : ', res.data[0].image);
      },
      err => notifications('danger', 'anda tidak terknoneksi ke internet'),
    );
  }, []);
  return (
    <View style={styles.page}>
      <View style={styles.contHeader}>
        <Headers
          type="sub-edit"
          title="Profil"
          namaButton="EDIT"
          onPressBack={() => navigation.goBack()}
          onPressRight={() => navigation.navigate('AlumniEditProfile', profile)}
        />
      </View>
      <Gap height={24} />
      <View>
        <ProfileUser
          nama={profile.name}
          photoUser={profile.image}
          fakultas={profile.faculty}
          jurusan={profile.prodi}
          angkatan={profile.level}
          email={profile.email}
          password={profile.password} //jangan ditampilin
          npm={profile.nim}
          thnlulus={profile.graduated}
          telepon={profile.phone}
        />
      </View>
      <Gap height={24} />
    </View>
  );
};

export default AlumniProfileUser;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
});
