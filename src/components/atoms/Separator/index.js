import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Separator = () => {
  return <View style={styles.detail} />;
};

export default Separator;

const styles = StyleSheet.create({
  detail: {
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
