import React from 'react'
import { StyleSheet, Text, Image, View } from 'react-native'

const LogoLogin = (props) => {
    return (
        <View style={styles.iconBody}>
            <Image style={styles.logo} source={require('../assets/icons/login.png')} />
            <Text style={styles.titleText}>{props.textTitle}</Text>
        </View>
    )
}

export default LogoLogin

const styles = StyleSheet.create({
    iconBody: {
        flexDirection: 'column',
        alignItems: 'center'
    }
    ,
    logo: {
        height: 130,
        width: 130,
        marginTop: 20
    }
    ,
    titleText: {
        fontSize: 30,
        textAlign: 'center',
        margin: 0,
        fontWeight: 600
    }
})
