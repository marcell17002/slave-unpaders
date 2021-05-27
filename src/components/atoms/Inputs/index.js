import React from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Inputs = ({
  title,
  value,
  isNumeric,
  edit,
  placeholder,
  onChangeText,
  secure,
}) => {
  return (
    <>
      <Text style={styles.titleText}>{title}</Text>
      <TextInput
        value={value}
        style={styles.inputText}
        secureTextEntry={secure}
        keyboardType={isNumeric ? 'numeric' : 'default'}
        editable={edit}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </>
  );
};

export default Inputs;

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.input.secondary,
    //marginTop: 12,
  },
  titleText: {
    fontSize: 16,
    fontFamily: fonts.primary.semibold,
    color: colors.text.primary,
    marginBottom: 12,
  },
  inputText: {
    fontSize: 13,
    fontFamily: fonts.primary.reguler,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 16,
    borderColor: colors.input.outline,
    color: colors.text.tertiary,
    backgroundColor: colors.input.background,
  },
});
