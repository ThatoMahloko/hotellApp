import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Title } from 'react-native-paper'
import { Card } from 'react-native-paper'
const CityCard = () => {
    return (
        <Card style={styles.cityCard}>
            <Image style={styles.cityImg} source={require('../assets/images/townOne.jpg')} />
            <Title>Cape Town</Title>
            <Text style={styles.description}>1 room - 2 guests</Text>
        </Card>
    )
}

export default CityCard

const styles = StyleSheet.create({
    cityCard: {
        width: 160,
        height: 160,
        flexDirection: 'column',
        borderRadius: 20, 
        margin:5, 
        marginBottom:70
    }
    ,
    cityImg: {
        height: '50%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }
    ,
    description:{
        fontWeight:900
    }
})
