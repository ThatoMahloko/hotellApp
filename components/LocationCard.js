import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Title } from 'react-native-paper'
import { Card } from 'react-native-paper'

const LocationCard = (props) => {
    return (
        <View style={styles.locationBody}>
            <View style={styles.locationCard}>
                <Image style={styles.location} source={{uri:props.data.coverImage}} />
                <Title style={styles.text}>{props.data.City}</Title>
            </View>

            

        </View>
    )
}

export default LocationCard

const styles = StyleSheet.create({
    locationBody: {
        flexDirection: 'row'
    }
    ,
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
