import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import { Card, Title } from 'react-native-paper'
const { width, height } = Dimensions.get('screen')
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoreHotels from '../screens/MoreHotels';

function ScrollCard({ navigation }) {

    return (
        <View style={styles.hotelBody}>
            <Card style={styles.body}>
                <ImageBackground style={styles.back} source={require('../assets/images/cardOne.jpg')}>
                    <View style={styles.cardContent}>
                        <Title style={styles.label}>CapeTown</Title>
                        <View style={styles.bottomCOntentRow}>
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('More')}>
                                <Text style={styles.buttonText}>BOOK HOTEL</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Title style={styles.moreNavText}>MORE HOTELS+</Title>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </Card>
            <Card style={styles.body}>
                <ImageBackground style={styles.back} source={require('../assets/images/cardTwo.jpg')}>
                    <View style={styles.cardContent}>
                        <Title style={styles.label}>Sandton</Title>
                        <View style={styles.bottomCOntentRow}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>BOOK HOTEL</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Title style={styles.moreNavText}>MORE HOTELS+</Title>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </Card>

        </View >
    )
}

export default ScrollCard

const styles = StyleSheet.create({
    hotelBody: {
        flexDirection: 'row'
    }
    ,
    body: {
        margin: 2,
    }
    ,
    back: {
        width: width,
        height: 350,
    }
    ,
    cardContent: {
        top: 220
    }
    ,
    label: {
        color: 'white',
        fontWeight: "300",
        fontSize: 40,
        margin: 8
    }
    ,
    bottomCOntentRow: {
        flexDirection: 'row',
        alignItems: 'center'
    }
    ,
    button: {
        width: 190,
        height: 70,
        backgroundColor: '#69DADB',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 8
    }
    ,
    buttonText: {
        color: 'white',
        fontSize: 24
    }
    ,
    moreNavText: {
        color: 'white',
        fontSize: 24,
        fontWeight: "600",
    }
})
