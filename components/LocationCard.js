import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { Title } from 'react-native-paper'
import { Card } from 'react-native-paper'

const LocationCard = () => {
    return (
        <View style={styles.locationCard}>
            <Image style={styles.location} source={require('../assets/images/cityOne.jpg')} />
            <Title style={styles.text}>Port Elizabeth</Title>

        </View>
    )
}

export default LocationCard

const styles = StyleSheet.create({
    locationCard: {
        width: 230,
        margin: 10

    }
    ,
    location: {
        width: '100%',
        height: 150,
        borderRadius: 20,
    }
    ,
    text: {
        color: 'white',
        position: 'absolute',
        top: 100,
        marginLeft: 15

    }

})
