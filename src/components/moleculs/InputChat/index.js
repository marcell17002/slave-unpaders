import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView, TextInput} from 'react-native';
import {Gap, Buttons} from '../../atoms';
import { colors, fonts } from '../../../utils';

const InputChat = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Tulis pesan..."></TextInput>
            <Buttons status="btn-icon-send" disable/> 
            {/* disable bernilai true, kl false disable={false} */}
        </View>
    );
};

export default InputChat;

const styles = StyleSheet.create({
    container: {
        paddingLeft: 24,
        paddingRight: 20,
        flexDirection: 'row',
        paddingVertical: 10,
    },
    input: {
        backgroundColor: colors.backgroundgrey,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        flex: 1,
        marginRight: 12,
        fontSize: 16,
        fontFamily: fonts.primary.reguler,
    }
});