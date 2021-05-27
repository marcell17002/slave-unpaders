import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Headers, CommentUser} from '../../components/moleculs';
import {Gap} from '../../components/atoms';
import { colors, fonts } from '../../utils';

const AlumniDisclaimer = ({navigation}) => {
    return (
        <View>
            <View>
                <Headers title='Disclaimer' type='sub-main-back' 
                onPressBack={() => navigation.goBack()}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>                
                <View style={styles.page}>
                <Gap height={24}/>
                    <Text style={styles.contPage}>UNPADERS adalah website komunitas alumni Universitas Padjadjaran dan memberi kesempatan kepada semua alumni untuk menjadi Kontributor. Alumni dan anggota masyarakat umum diperkenankan memberikan komentar atas naskah/artikel/informasi yang dimuat UNPADERS.</Text>
                    <Gap height={20}/>
                    <Text style={styles.contPage}>UNPADERS sangat menganjurkan agar Kontributor dan Pembaca yang hendak mempublikasikan naskah/artikel serta opini dan pendapat tidak menyinggung suku, agama, ras dan antar-golongan (SARA), tidak menyebarkan fitnah, tidak menggunakan kata-kata kotor, tidak menggunakan nickname atau nama samaran.</Text>
                    <Gap height={20}/>
                    <Text style={styles.contPage}>UNPADERS sangat berharap informasi yang dikirimkan Kontributor dan komentar Pembaca berisi pokok-pokok pikiran, ide dan gagasan yang konstruktif.</Text>
                    <Gap height={20}/>
                    <Text style={styles.contPage}>Kontributor dan Pembaca pun sangat dianjurkan untuk menggunakan bahasa Indonesia yang baik dan benar.</Text>
                    <Gap height={20}/>
                    <Text style={styles.contPage}>UNPADERS tidak bertanggung jawab atas naskah/artikel yang dipublikasikan Kontributor, juga komentar yang diberikan Pembaca.</Text>
                    <Gap height={20}/>
                    <Text style={styles.contPage}>UNPADERS tidak bertanggung jawab atas semua bentuk pelanggaran hukum yang dilakukan pihak lain dengan menggunakan atau memanfaatkan berita atau materi lain yang dipublikasikan UNPADERS, baik sebagian atau keseluruhan.</Text>
                    <Gap height={80}/>
                </View>
            </ScrollView>
        </View>
    );
};

export default AlumniDisclaimer;

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