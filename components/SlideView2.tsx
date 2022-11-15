import React from 'react';
import Constants from 'expo-constants'
import { StyleSheet, Text, View, Image } from 'react-native';

export default function SlideView2() {
  return (
    <>
    <View style={styles.containerLogo}>
      <Image source={require('../assets/logoFAHYellow.png')} style={styles.logo}></Image>
    </View>
    <View style={styles.container}>
        <Text style={styles.text}>Podrás adoptar a tu mascota soñada o encontrarle un mejor lugar a un gatito rescatado.</Text>
    <Image source={require('../assets/animals.png')} style={styles.image}></Image>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerLogo: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#AB4E68',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  container: {
    flex: 2,
    backgroundColor: '#AB4E68',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo:{
    width: 67,
    height: 60,
    margin: 40,
  },
  text:{
    color: '#FFF',
    margin: 30,
    fontSize: 28,
    textAlign: 'center'
  },
  image:{
    position: 'absolute',
    bottom: 0,
  }
});
 