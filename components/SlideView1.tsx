import React from 'react';
import Constants from 'expo-constants'
import { StyleSheet, Text, View, Image } from 'react-native';

export default function SlideView1() {
    return (
        <>
            <View style={styles.containerLogo}>
                <Image source={require('../assets/logoFAHYellow.png')} style={styles.logo}></Image>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>Somos una Organización sin fines de lucro que busca ayudar a las mascotas a encontrar un hogar</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    containerLogo: {
        marginTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#3A302E',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
    },
    container: {
        flex: 2,
        backgroundColor: '#3A302E',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    logo: {
        width: 67,
        height: 60,
        margin: 40,
    },
    text: {
        color: '#FFF',
        margin: 30,
        fontSize: 28,
        textAlign: 'center'
    }
});
