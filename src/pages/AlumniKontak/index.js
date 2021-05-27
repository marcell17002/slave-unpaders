import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Headers, CommentUser} from '../../components/moleculs';
import {Gap} from '../../components/atoms';
import { colors, fonts } from '../../utils';

const AlumniKontak = ({navigation}) => {
    return (
        <View>
            <View>
                <Headers title='Kontak' type='sub-main-back' 
                onPressBack={() => navigation.goBack()}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.page}>
                <Gap height={24}/>

                <Text style={styles.contText}>UNPADERS, website komunitas Alumni Universitas Padjadjaran, menjalin masa, menginspirasi dunia.</Text>
                <Gap height={24}/>

                <Text style={styles.contJudul}>Founder:</Text>
                <Text style={styles.contText}>Irawati Hermawan</Text>
                <Gap height={24}/>

                <Text style={styles.contJudul}>Co-Founder:</Text>
                <Text style={styles.contText}>Teguh Santosa</Text>
                <Gap height={24}/>

                <Text style={styles.contJudul}>Chief Editor:</Text>
                <Text style={styles.contText}>Sonny Muhammad</Text>
                <Gap height={24}/>

                <Text style={styles.contJudul}>Managing Editor:</Text>
                <Text style={styles.contText}>Alexander Manurung</Text>
                <Gap height={24}/>

                <Text style={styles.contJudul}>Editorial Staff:</Text>
                <Text style={styles.contText}>Amelia Putri Pertiwi, Ikbal Tawakal</Text>
                <Gap height={24}/>

                <Text style={styles.contJudul}>Alamat:</Text>
                <Text style={styles.contText}>Jalan Pelajar Pejuang 45 No. 104, Bandung, Jawa Barat</Text>
                <Gap height={24}/>

                <Text style={styles.contJudul}>Telp/WA:</Text>
                <Text style={styles.contText}>085156507180</Text>
                <Gap height={24}/>

                <Text style={styles.contJudul}>E-mail:</Text>
                <Text style={styles.contText}>redaksi@unpaders.id</Text>
                <Gap height={24}/>
                </View>
            </ScrollView>
        </View>
    );
};

export default AlumniKontak;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
    },
    contJudul: {
        marginRight: 20,
        marginLeft: 24,
        fontSize: 16, 
        fontFamily: fonts.primary.bold,
        color: colors.text.primary,
    },
    contText: {
        marginRight: 20,
        marginLeft: 24,
        fontSize: 16, 
        fontFamily: fonts.primary.reguler,
        color: colors.text.primary,
    }
});