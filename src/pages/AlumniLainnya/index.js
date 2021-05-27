import React from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Gap, ListButton} from '../../components/atoms/';
import {Headers} from '../../components/moleculs/';
import { fonts, colors } from '../../utils';

const AlumniLainnya = ({navigation}) => {
    return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.page}>
            <View style={styles.contHeader}>
                <Headers type="main" title="LAINNYA"/>
            </View>
    
            <View style={styles.ghap}>
                <Gap height={12}/>
                <Text style={styles.textGap}>PROFILE</Text>
                <Gap height={12}/>
            </View>
            <View>
                <ListButton type="primary" namaTombol="Profil"
                onPress={() => navigation.navigate('AlumniProfileUser')}/>
            </View>
            <View style={styles.ghap}>
                <Gap height={12}/>
                <Text style={styles.textGap}>UNPADERS</Text>
                <Gap height={12}/>
            </View>
            <ListButton type="primary" namaTombol="Tentang Kami" 
            onPress={() => navigation.navigate('AlumniTentangKami')}/>
            <ListButton type="primary" namaTombol="Kontak"
            onPress={() => navigation.navigate('AlumniKontak')}/>
            <ListButton type="primary" namaTombol="Disclaimer"
            onPress={() => navigation.navigate('AlumniDisclaimer')}/>
            <View style={styles.ghap}>
                <Gap height={12}/>
                <Text style={styles.textGap}>SOCIAL MEDIA UNPADERS</Text>
                <Gap height={12}/>
            </View>
            <ListButton type="secondary" namaTombol="Facebook"/>
            <ListButton type="secondary" namaTombol="Twitter"/>
            <ListButton type="secondary" namaTombol="Instagram"/>
            <ListButton type="secondary" namaTombol="Youtube"/>
            
            <View style={styles.ghap}>
                <Gap height={12}/>
                <Text style={styles.textGap}>LOGOUT</Text>
                <Gap height={12}/>
            </View>
            <TouchableOpacity>
                <Text style={styles.logout}>Logout Akun</Text>
            </TouchableOpacity>
            

        </View>
    </ScrollView>
    );
};

export default AlumniLainnya;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
    },
    ghap: {
        backgroundColor: colors.text.grey,
    },
    textGap: {
        marginLeft: 24,
        fontSize: 12,
        fontFamily: fonts.primary.reguler,
        color: colors.text.tertiary,
    },
    logout: {
        marginVertical: 16,
        marginLeft: 24,
        fontSize: 18,
        fontFamily: fonts.primary.bold,
        color: colors.text.primdonker1,
    }
});