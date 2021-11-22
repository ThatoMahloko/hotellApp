import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Title } from 'react-native-paper'
import { Card } from 'react-native-paper'
const CityCard = () => {
    return (
        <View style={styles.Card}>
            <Card style={styles.cityCard}>
                <Image style={styles.cityImg} source={require('../assets/images/cityOne.jpg')} />
                <Title>Cape Town</Title>
                <Text style={styles.description}>1 room - 2 guests</Text>
            </Card>

            <Card style={styles.cityCard}>
                <Image style={styles.cityImg} source={require('../assets/images/townTwo.jpg')} />
                <Title>Durban</Title>
                <Text style={styles.description}>2 rooms - 4 guests</Text>
            </Card>

            <Card style={styles.cityCard}>
                <Image style={styles.cityImg} source={require('../assets/images/townThree.jpg')} />
                <Title>Port Elizabeth</Title>
                <Text style={styles.description}>3 rooms - 6 guests</Text>
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
        width:160,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }
    ,
    description: {
        fontWeight: "900"
    }
})
