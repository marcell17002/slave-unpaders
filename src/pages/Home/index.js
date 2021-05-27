import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors} from '../../utils';
import {Buttons, Gap, Inputs} from '../../components/atoms';
import {Headers, Event, Comment} from '../../components/moleculs';
import {api} from '../../services';
import axios from 'axios';

const Home = () => {
  return (
    <View styles={styles.container}>
      <Headers
        type="search"
        icon
        actions="SIMPAN"
        title="CHATS"
        placeholder="Cari disini..."
        iconName="chevron-back-outline"
      />
      <Buttons status="tertiary" title="Daftar" />
      <Inputs title="Hello" placeholder="asda" />
      {/* <Event
        category="AKTUAL"
        time="3 JAM YANG LALU"
        title="Selamat Jalan Bung Candra"
        author="Tim Unpaders"
      /> */}
      <Comment
        sender="Malik Zulfikar"
        time="1 jam yang lalu"
        desc=" Keren banget sekarang kampus kita yang tercinta! Selamat datang para
          mahasiswa baru, terus harumkan nama almamater"
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
});
