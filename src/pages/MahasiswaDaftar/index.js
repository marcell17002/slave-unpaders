import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import { color } from 'react-native-reanimated';
import { NavigationEvents, withOrientation } from 'react-navigation';
import { Buttons, Gap, Inputs, Link } from '../../components/atoms';
import { fonts, colors } from '../../utils';

const MahasiswaDaftar = ({navigation}) => {
    return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.page}>
        <View style={styles.contImage}>
            <Image source={require("../../assets/LogoBesar.png")}
            style={StyleSheet.image} 
            />
            <Text style={styles.title}>Daftar sebagai Mahasiswa</Text>
        </View>
        <Gap height={40}/>
        <View>
            <Text style={styles.section}>Informasi Personal</Text>
            <Inputs title="Email" placeholder="Masukkan Email"/>
            <Gap height={24}/>
            <Inputs title="Password" placeholder="Masukkan Password"/>
            <Gap height={24}/>
            <Inputs title="Nama Lengkap" placeholder="Masukkan Nama Lengkap"/>
            <Gap height={24}/>
            <Inputs title="Nomor Telepon" placeholder="Masukkan Nomor Telepon"/>
            <Text style={styles.note}>*Nomor WA tidak akan ditampilkan pada profile</Text>
            <Gap height={24}/>
        </View>

        <Gap height={32}/>
        <View>
            <Text style={styles.section}>Latar Belakang Pendidikan</Text>
            <Inputs title="Nomor Pokok Mahasiswa" placeholder="Masukkan Nomor Pokok Mahasiswa"/>
            <Gap height={24}/>
            {/* ini harusnya bentuk pilihan!! */}
            <Inputs title="Fakultas" placeholder="Masukkan Fakultas"/>
            <Gap height={24}/>
            <Inputs title="Program Studi" placeholder="Masukkan Program Studi"/>
            <Gap height={24}/>
            <Inputs title="Angkatan" placeholder="Masukkan Angkatan"/>
        </View>
        <Gap height={50}/>
        <View>
            <Buttons title="Daftar" 
            onPress={() => navigation.replace('Home')} />
            
            <Text style={styles.buttonlink}>Sudah punya Akun?</Text>
            <Link title="Masuk disini"/>
        </View>
    </View>
    </ScrollView>
    );
};

export default MahasiswaDaftar;

const styles = StyleSheet.create ({
    page: {
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: 24,
        paddingRight: 20,
    },
    contImage: {
        marginTop: 28,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        marginTop: 12,
        textAlign: 'center',
        color: colors.text.primdonker2,
        fontFamily: fonts.primary.bold,
    },
    section: {
        fontSize: 18,
        fontFamily: fonts.primary.semibold,
        color: colors.text.primary,
        marginBottom: 20,
    },
    note: {
        fontSize: 12,
        fontFamily: fonts.primary.reguler,
        color: colors.input.text,
        marginTop: 12,
    },
    buttonlink: {
        textAlign: 'center',
        fontSize: 14,
        fontFamily: fonts.primary.reguler,
        color: colors.text.tertiary,
        marginTop: -8,
    }
})