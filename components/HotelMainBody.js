import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { Paragraph, Title } from 'react-native-paper'
function HotelMainBody({ props }) {


    return (
        <View style={styles.hotelCardBody}>
            <Image style={styles.image} source={require('../assets/images/villaOne.jpg')} />
            <View styles={styles.cardHoteldescriptionBody}>
                <Text styles={styles.cardHoteldescription}>Paradise Hotel & Spa</Text>
                <View style style={styles.cardHoteldescriptionSubTitle}>
                    <Text><Paragraph style={styles.cardCityname}>Durban</Paragraph></Text>
                    <Text><Paragraph style={styles.cardCityPrice}>R 980.00</Paragraph></Text>
                </View>
                <Text><Paragraph style={styles.cardCityname}>Rooms: 4</Paragraph></Text>
                <Text><Paragraph style={styles.cardCityname}>Guests: 8</Paragraph></Text>
                <Text><Paragraph style={styles.cardCityname}>BEDS: 8</Paragraph></Text>
            </View>
        </View>
    )
}
export default HotelMainBody;

const styles = StyleSheet.create({
    hotelCardBody: {
        width: 340,
        height: 160,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderColor: '#66806A',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 0.1
    }
    ,
    image: {
        width: 140,
        height: 160,
        right: 0,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        marginRight: 20
    }
    ,
    cardHoteldescriptionBody: {
        flexDirection: 'column',
    }
    ,
    cardHoteldescription: {
        fontWeight: "400",
    }
    ,
    cardHoteldescriptionSubTitle: {
        flexDirection: 'row',
    }
    ,
    cardCityname: {
        color: 'grey',
        fontSize: 15,
        marginRight: 20
    },
    cardCityPrice: {
        color: '#69DADB',
        fontWeight: "600",
        fontSize: 15,
        top: -10

    }
    ,
})
