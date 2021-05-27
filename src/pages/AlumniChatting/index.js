import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Headers, CommentUser, ChatItem, InputChat} from '../../components/moleculs';
import {Gap, Buttons} from '../../components/atoms';
import { colors, fonts } from '../../utils';

const AlumniChatting = ({navigation}) => {
    return (
        <View style={styles.page}>
            <View>
                <Headers title='Dzakia Rayhana' type='sub-main-back' 
                onPressBack={() => navigation.goBack()}/>
            </View>
            <View style={styles.contText}>
                <Text style={styles.chatDate}>Rabu, 19 Mei 2021</Text>
                <ChatItem isMe/>
                <ChatItem/>
                <ChatItem isMe/>
            </View>
            <InputChat/>

        </View>
    );
};

export default AlumniChatting;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
    },
    chatDate: {
        fontSize: 12,
        fontFamily: fonts.primary.reguler,
        color: colors.text.tertiary,
        marginVertical: 20,
        textAlign: 'center',
    },
    contText: {
        flex: 1,
    },
});