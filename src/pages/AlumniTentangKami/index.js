import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Headers, CommentUser} from '../../components/moleculs';
import {Gap} from '../../components/atoms';
import { colors, fonts } from '../../utils';

const AlumniTentangKami = ({navigation}) => {
    return (
        <View>
            <View>
                <Headers title='Tentang Kami' type='sub-main-back' 
                onPressBack={() => navigation.goBack()}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>                
                <View style={styles.page}>
                <Gap height={24}/>
                    <Text style={styles.contPage}>Ada banyak media daring dan beragam jenisnya. Unpaders memilih menjadi portal komunitas, untuk alumni Universitas Padjadjaran. Kami berkomitmen menjadi wadah lintas angkatan, lintas generasi; lintas fakultas pun lintas perkubu-kubuan (seandainya itu pun ada). Kami berkomitmen menaungi semua perspektif, hobi, hingga gaya hidup.</Text>
                    <Gap height={20}/>
                    <Text style={styles.contPage}>Para penggagas Unpaders berasal dari angkatan dan fakultas yang berbeda-beda pula. Bersua dan berurun-rembuk secara daring. Sebagian di antaranya belum pernah saling mengenal satu sama lain. Kami disatukan semangat yang sama: mengisi kekosongan medium komunikasi antar sesama alumni Unpad.</Text>
                    <Gap height={20}/>
                    <Text style={styles.contPage}>Unpaders tak terafiliasi pada struktur keorganisasian manapun, termasuk IKA Unpad. Bagi kami, ini pilihan yang strategis. Dengan cara ini kami ingin memastikan Unpaders selalu ada dan terus berkembang, tak tergantung pergantian kepengurusan dan dinamika yang menyertainya.</Text>
                    <Gap height={20}/>
                    <Text style={styles.contPage}>Melalui Unpaders, kami berharap alumni dapat saling berjejaring, berkolaborasi mewujudkan potensinya masing-masing pun memberi kontribusi pada bangsa dan dunia.</Text>
                    <Gap height={40}/>
                    <Text style={styles.contPage}>www.unpaders.id</Text>
                    <Text style={styles.contPage}>IG: unpaders.id</Text>
                    <Gap height={80}/>
                </View>
            </ScrollView>
        </View>
    );
};

export default AlumniTentangKami;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
    },
    contPage: {
        marginRight: 20,
        marginLeft: 24,
        fontSize: 16, 
        fontFamily: fonts.primary.reguler,
        color: colors.text.primary,
    }
});