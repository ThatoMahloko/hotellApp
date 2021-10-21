import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import LogoLogin from '../components/LogoLogin'

const Register = () => {
    return (
        <ImageBackground style={styles.back} source={require('../assets/images/back.jpg')}>
            <View>
                <LogoLogin textTitle={'REGISTER'}/>
              <TouchableOpacity style={styles.buttonR}>
                    <Text style={styles.buttonText}>REGISTER</Text>
                </TouchableOpacity>
             


                <TextInput style={styles.input} placeholder={'Your email'} />
                <TextInput style={styles.input} placeholder={'Password'} />
                <TextInput style={styles.input} placeholder={'Confirm password'} />

            </View>

        </ImageBackground>
    )
}

export default Register

const styles = StyleSheet.create({
    back: {
        height: '100%',
        width: '100%',
        opacity: 1,
        alignItems: 'center',
    }
    ,
    button: {
        backgroundColor: '#69DADB',
        width: 290,
        height: 70,
        justifyContent: 'center',
        borderRadius: 10,
        top: 350
    }
    ,
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30
    }
    ,
    buttonR: {
        backgroundColor: '#69DADB',
        width: 290,
        height: 70,
        justifyContent: 'center',
        borderRadius: 10,
        top: 350,
        opacity: 1

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
})
