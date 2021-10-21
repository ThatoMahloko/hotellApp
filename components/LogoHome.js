import React from 'react'
import { StyleSheet, Text, Image, View } from 'react-native'

const LogoHome = () => {
    return (
        <View style={styles.iconBody}>
            <Image style={styles.logo} source={require('../assets/icons/home.png')} />
            <Text style={styles.titleText}>LITTLE ROCK</Text>
            <Text style={styles.titleText}>GUEST HOUSE</Text>
            <View style={styles.fiveStar}>
                <Image style={styles.star} source={require('../assets/icons/star.png')} />
                <Image style={styles.star} source={require('../assets/icons/star.png')} />
                <Image style={styles.star} source={require('../assets/icons/star.png')} />
                <Image style={styles.star} source={require('../assets/icons/star.png')} />
                <Image style={styles.star} source={require('../assets/icons/star.png')} />
            </View>
        </View>
    )
}

export default LogoHome

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
    ,
    fiveStar: {
        flexDirection: 'row'
    }
    ,
    star: {
        width: 60,
        height: 60
    }
})
