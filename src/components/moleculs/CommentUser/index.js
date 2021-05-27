import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import {Headers, Kategori, Event} from '../../components/moleculs';
import { fonts, colors } from '../../../utils';
import {Gap} from '../../atoms';

const CommentUser = ({image, user, waktu, komentar}) => {
    return (
        <View style={styles.page}>
            <View style={styles.contCommentUser}> 
                <Image
                style={styles.logo}
                source={require('../../../assets/user.png')}
                />
                <View style={styles.detailKomen}>
                    <View style={styles.ketUser}>
                        <Text style={styles.user}>{user}</Text>
                        <Gap width={12}/>
                        <Text style={styles.waktu}>{waktu}</Text>
                    </View>
                    <View style={styles.komen}>
                        <Text>{komentar}</Text>
                    </View>
                </View>
                
            </View>
        </View>
    );
};

export default CommentUser;

const styles = StyleSheet.create({
    contCommentUser: {
        marginLeft: 24, 
        marginRight: 20,
        backgroundColor: 'white',
        flexDirection: 'row',
        marginBottom: 24,
    },
    ketUser: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    detailKomen: {
        flexDirection: 'column',
        marginLeft: 16,
    },
    user: {
        fontSize: 14,
        fontFamily: fonts.primary.semibold,
        color: colors.text.primary,
    },
    waktu: {
        fontSize: 14,
        fontFamily: fonts.primary.reguler,
        color: colors.text.tertiary,
    },
    komen: {
        fontSize: 14,
        fontFamily: fonts.primary.reguler,
        color: colors.text.primary,
        maxWidth: 280,
    },
    logo: {
        height: 40,
        width: 40,
        resizeMode: 'cover',
        borderRadius: 20,
        marginRight: 16,
      },
});