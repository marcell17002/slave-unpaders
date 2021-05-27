import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { withOrientation } from 'react-navigation';
import { useEffect } from 'react';

const Splashscreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Intro');
        }, 3000)
    }, [])
    return (
        <View style={styles.container}> 
            <Image
                source={require("../../assets/Splash.png")}
                style={StyleSheet.image} />
        </View>
    );
};

export default Splashscreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 313,
        height: 208,
    },
})