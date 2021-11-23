import React, { useState } from 'react'
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import LogoForgotPassword from '../components/LogoForgotPassword';
import SendPasswordResetMail from '../auth/sendPasswordResetMail'
function ForgotPassword({navigation}) {

    const [email, setEmail] = useState('')

    const resetEmail = (email) => {
        SendPasswordResetMail(email)
        navigation.navigate('Login')
    }

    return (
        <ImageBackground style={styles.back} source={require('../assets/images/back.jpg')}>
            <View>
                <LogoForgotPassword textTitle="FORGOT PASSWORD" />

                <TextInput style={styles.input} placeholder={'Your email'} onChangeText={(email) => setEmail(email)} />

                <TouchableOpacity style={styles.button} onPress={() => resetEmail(email)}>
                    <Text style={styles.buttonText}>RESET</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
export default ForgotPassword;

const styles = StyleSheet.create({
    back: {
        height: '100%',
        width: '100%',
        opacity: 1,
        alignItems: 'center',
    }
    ,
    input: {
        width: 300,
        height: 60,
        backgroundColor: 'white', margin: 0,
        paddingLeft: 15,
        borderRadius: 10,
        marginTop: 20
    }
    ,
    button: {
        backgroundColor: '#69DADB',
        width: 290,
        height: 70,
        justifyContent: 'center',
        borderRadius: 10,
        top: 40
    }
    ,
    buttonText: {
        textAlign: 'center',
        color: "white",
        fontSize: 30
    }
})
