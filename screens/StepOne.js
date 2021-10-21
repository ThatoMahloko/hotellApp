import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import LogoHome from '../components/LogoHome'

const StepOne = () => {
    return (
        <ImageBackground style={styles.back} source={require('../assets/images/back.jpg')}>
            <View>
                <LogoHome />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonR}>
                    <Text style={styles.buttonText}>REGISTER</Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>
    )
}

export default StepOne

const styles = StyleSheet.create({
    back: {
        height: '100%',
        width: '100%',
        opacity: 1,
        alignItems: 'center'
    }
    ,
    button: {
        backgroundColor: '#69DADB',
        width: 290,
        height: 70,
        justifyContent: 'center',
        borderRadius: 10,
        top: 350,
        marginBottom: 10
    }
    ,
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30
    },
    buttonR: {
        backgroundColor: '#69DADB',
        width: 290,
        height: 70,
        justifyContent: 'center',
        borderRadius: 10,
        top: 360,

    }
})
