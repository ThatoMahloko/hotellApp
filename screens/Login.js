import React, { useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import login from '../auth/login';
import LogoLogin from '../components/LogoLogin'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logi = () => {
        login(email, password, navigation)
    }

    return (
        <ImageBackground style={styles.back} source={require('../assets/images/back.jpg')}>
            <View>
                <LogoLogin textTitle={'LOGIN'} />
                <TouchableOpacity style={styles.button} onPress={() => logi(navigation)}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonR} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.buttonText}>REGISTER</Text>
                </TouchableOpacity>

                <TextInput style={styles.input} placeholder={'Your email'} onChangeText={(email) => setEmail(email)} />
                <TextInput style={styles.input} secureTextEntry={true} placeholder={'Password'} onChangeText={(password) => setPassword(password)} />

            </View>

        </ImageBackground>
    )
}

export default Login

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
        top: 400,
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
