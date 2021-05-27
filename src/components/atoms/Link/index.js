import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';

const Link = ({title, type, onPress}) => {
  const LinkType = () => {
    switch (type) {
      case 'primary':
        return (
          <TouchableOpacity onPress={onPress} style={styles.TextPrimary}>
            <Text style={styles.textPrimary}>{title}</Text>
          </TouchableOpacity>
        );
      case 'secondary':
        return (
          <TouchableOpacity onPress={onPress} style={styles.TextSecondary}>
            <Text style={styles.textSecondary}>{title}</Text>
          </TouchableOpacity>
        );
      default:
        return (
          <TouchableOpacity onPress={onPress} style={styles.TextPrimary}>
            <Text style={styles.textPrimary}>{title}</Text>
          </TouchableOpacity>
        );
    }
  };
  return (
    <View>
      <LinkType />
    </View>
  );
};

export default Link;

const styles = StyleSheet.create({
  textPrimary: {
    fontSize: 16,
    color: colors.text.primdonker2,
    fontFamily: fonts.primary.bold,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 30,
  },
  textSecondary: {
    fontSize: 16,
    color: colors.text.primdonker2,
    fontFamily: fonts.primary.bold,
    textAlign: 'left',
    marginTop: 8,
    marginBottom: 30,
  },
});
