import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Dimensions, TouchableOpacity, Touchable } from 'react-native'
import { Card, Title } from 'react-native-paper'
const { width, height } = Dimensions.get('screen')

const ScrollCard = () => {
    return (
        <Card style={styles.body}>
            <ImageBackground style={styles.back} source={require('../assets/images/cardOne.jpg')}>
                <View style={styles.cardContent}>
                    <Title style={styles.label}>Bangledash</Title>
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
    )
}

export default ScrollCard

const styles = StyleSheet.create({
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
        fontWeight: 300,
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
        fontWeight: '600',
    }
})
