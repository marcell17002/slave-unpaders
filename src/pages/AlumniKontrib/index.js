import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Headers, CommentUser} from '../../components/moleculs';
import {Gap} from '../../components/atoms';
import { colors, fonts } from '../../utils';
import { color } from 'react-native-reanimated';

const AlumniKontrib = ({navigation}) => {
    return (
        <View>
            <View>
                <Headers title='Ketentuan Kontributor' type='sub-main-back' 
                onPressBack={() => navigation.goBack()}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}> 
            <View style={styles.page}>
                <View style={styles.container}> 
                    <Text style={styles.Judul}>Kontributor</Text>
                    {/* ini yg flex row */}
                    <View style={styles.subKontrib}>
                        <View>
                            <Image
                            style={styles.photo1}
                            source={require('../../assets/Kontrib1.png')}
                            />
                            <Text style={styles.textKet1}>Kontributor adalah Alumni Universitas Padjadjaran</Text>
                        </View>
                        <Gap width={16}/>
                        <View>
                            <Image
                            style={styles.photo1}
                            source={require('../../assets/Kontrib2.png')}
                            />
                            <Text style={styles.textKet1}>Kontributor melengkapi data diri dengan sebenar-benarnya pada form Registrasi</Text>
                        </View>
                    </View>
                </View>
                <Gap height={24}/>
                <View style={styles.container}>
                    <Text style={styles.Judul}>Ketentuan Artikel</Text>
                    <View>
                        <Image
                            style={styles.photo1}
                            source={require('../../assets/Kontrib3.png')}
                        />
                        <Text style={styles.textArtikel}>1. Artikel dikirimkan dengan bahasa Indonesia yang baik dan benar dan memperhatikan kaidah penulisan.</Text>
                        <Text style={styles.textArtikel}>2. Artikel juga dapat menggunakan bahasa Sunda dan bahasa Inggris, dengan memperhatikan kaidah penulisan yang baik dan benar.</Text>
                        <Text style={styles.textArtikel}>3. Apabila artikel maupun foto berupa saduran dari sumber lain, kontributor wajib menyebutkan sumber.</Text>
                        <Text style={styles.textArtikel}>4. Informasi UMKM yang dikirimkan harus mengandung informasi mengenai Nama Alumni, Fakultas/Angkatan, Kategori Usaha, Nomor Kontak, Lokasi Usaha, dan Medias Sosial, serta Deskripsi mengenai produk UMKM.</Text>
                    </View>
                </View>
                <Gap height={24}/>
                <View style={styles.container}> 
                    <Text style={styles.Judul}>Publikasi Artikel</Text>
                    {/* ini yg flex row */}
                    <View style={styles.subKontrib}>
                        <View>
                            <Image
                            style={styles.photo1}
                            source={require('../../assets/Kontrib4.png')}
                            />
                            <Text style={styles.textKet1}>Profile yang ditampilkan berupa Nama, Fakultas, Jurusan, dan Angkatan</Text>
                        </View>
                        <Gap width={32}/>
                        <View>
                            <Image
                            style={styles.photo1}
                            source={require('../../assets/Kontrib5.png')}
                            />
                            <Text style={styles.textKet1}>Unpaders akan melakukan kurasi/editing tanpa mengurangi substansi</Text>
                        </View>
                    </View>
                    <Gap height={24}/>
                    <View style={styles.subKontrib}>
                        <View>
                            <Image
                            style={styles.photo1}
                            source={require('../../assets/Kontrib6.png')}
                            />
                            <Text style={styles.textKet1}>Bila diperlukan, Tim Unpaders akan menghubungi untuk mengonfirmasi artikel</Text>
                        </View>
                        <Gap width={16}/>
                        <View>
                            <Image
                            style={styles.photo1}
                            source={require('../../assets/Kontrib7.png')}
                            />
                            <Text style={styles.textKet1}>Kontributor bertanggung jawab atas Artikel yang dikirim dan dipublikasikan</Text>
                        </View>
                    </View>
                </View>
                <Gap height={80}/>
            </View>
            </ScrollView>
        </View>
    );
};

export default AlumniKontrib;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.primaryWhite,
        paddingTop: 20,
        paddingLeft: 24,
        paddingRight: 20,
    },
    container: {
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderColor: colors.backgroundgrey,
        borderWidth: 2,
        borderRadius: 10,
    },
    photo1: {
        marginTop: 20,
        marginBottom: 16,
        alignSelf: 'center',
    },
    textKet1: {
        maxWidth: 160,
        textAlign: 'center',
        fontSize: 12,
        fontFamily: fonts.primary.reguler,
        color: colors.text.primary,
        //backgroundColor: 'yellow',
    },
    subKontrib: {
        flexDirection: 'row',
        flex: 1,
        //backgroundColor: 'yellow',
    },
    contArtikel: {
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderColor: colors.backgroundgrey,
        borderWidth: 2,
        borderRadius: 10,
    },
    textArtikel: {
        fontSize: 12,
        fontFamily: fonts.primary.reguler,
        color: colors.text.primary,
    },
    Judul: {
        fontSize: 18,
        fontFamily: fonts.primary.semibold,
        color: colors.text.primary,
    },

});