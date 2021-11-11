import React, { useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import LogoLogin from '../components/LogoLogin'
import register from '../auth/register'

const Register = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [passsword, setPassword] = useState('')
    const [confirmPassword, setConfrimPassword] = useState('')

    const registerUser = () => {
        register(email, passsword, confirmPassword, navigation)

    }

    return (
        <ImageBackground style={styles.back} source={require('../assets/images/back.jpg')}>
            <View>
                <LogoLogin textTitle={'REGISTER'} />
                <TouchableOpacity style={styles.buttonR} onPress={() => registerUser()}>
                    <Text style={styles.buttonText}>REGISTER</Text>
                </TouchableOpacity>



                <TextInput style={styles.input} placeholder={'Your email'} onChangeText={(email) => setEmail(email)} />
                <TextInput style={styles.input} secureTextEntry={true} placeholder={'Password'} onChangeText={(passsword) => setPassword(passsword)} />
                <TextInput style={styles.input} secureTextEntry={true} placeholder={'Confirm password'} onChangeText={(confirmPassword) => setConfrimPassword(confirmPassword)} />

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
