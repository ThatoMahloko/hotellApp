import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Title } from 'react-native-paper'
import { Card } from 'react-native-paper'
const CityCard = (props) => {
    return (
        <View style={styles.Card}>
            <Card style={styles.cityCard}>
                <Image style={styles.cityImg} source={{uri:props.data.coverImage}} />
                <Title>{props.data.city}</Title>
                <Text style={styles.description}>1 room - 2 guests</Text>
            </Card>

        </View>
    )
}

export default CityCard

const styles = StyleSheet.create({
    Card: {
        flexDirection: 'row'
    }
    ,
    cityCard: {
        width: 160,
        height: 160,
        flexDirection: 'column',
        borderRadius: 20,
        margin: 5,
        marginBottom: 70
    }
    ,
    cityImg: {
        height: 80,
        width: 160,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }
    ,
    description: {
        fontWeight: "900"
    }
})
