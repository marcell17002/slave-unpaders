import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Headers, CommentUser} from '../../components/moleculs';
import {Gap} from '../../components/atoms';
import { colors, fonts } from '../../../utils';

const IsMe = () => {
    return (
        <View style={styles.container}>
            <View style={styles.chatContent}>
                <Text style={styles.textChat}>Assalamualaikum Wr. Wb. Wilujeng Enjing teh Dzakia.</Text>
            </View>
            <Text style={styles.date}>4:30 AM</Text>
        </View>
    );
};

export default IsMe;

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        alignItems: 'flex-end',
        paddingRight: 20,
    },
    chatContent: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: colors.secondBlue,
        maxWidth: '70%',
        borderRadius: 10,
        borderBottomRightRadius: 0,
    },
    textChat: {
        fontSize: 12,
        fontFamily: fonts.primary.reguler,
        color: colors.text.primary,
    },
    date: {
        fontSize: 11,
        fontFamily: fonts.primary.reguler,
        color: colors.text.tertiary,
        marginTop: 8,
    }
});