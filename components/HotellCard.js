import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper'
const HotellCard = ({navigation}) => {
    return (
        <View style={styles.hotelCardMainBody}>
            <Title style={styles.pageTitle}>More Hotels</Title>
            <TouchableOpacity>
                <View style={styles.hotelCardBody}>
                    <Image style={styles.image} source={require('../assets/images/villaOne.jpg')} />
                    <View styles={styles.cardHoteldescriptionBody}>
                        <Title styles={styles.cardHoteldescription}>Paradise Hotel & Spa</Title>
                        <View style style={styles.cardHoteldescriptionSubTitle}>
                            <Paragraph style={styles.cardCityname}>Durban</Paragraph>
                            <Paragraph style={styles.cardCityPrice}>R 980.00</Paragraph>
                        </View>
                        <Paragraph style={styles.cardCityname}>Rooms: 4</Paragraph>
                        <Paragraph style={styles.cardCityname}>Guests: 8</Paragraph>
                        <Paragraph style={styles.cardCityname}>BEDS: 8</Paragraph>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.hotelCardBody}>
                    <Image style={styles.image} source={require('../assets/images/villaTwo.jpg')} />
                    <View styles={styles.cardHoteldescriptionBody}>
                        <Title styles={styles.cardHoteldescription}>Paradise Hotel & Spa</Title>
                        <View style style={styles.cardHoteldescriptionSubTitle}>
                            <Paragraph style={styles.cardCityname}>Durban</Paragraph>
                            <Paragraph style={styles.cardCityPrice}>R 980.00</Paragraph>
                        </View>
                        <Paragraph style={styles.cardCityname}>Rooms: 4</Paragraph>
                        <Paragraph style={styles.cardCityname}>Guests: 8</Paragraph>
                        <Paragraph style={styles.cardCityname}>BEDS: 8</Paragraph>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.hotelCardBody}>
                    <Image style={styles.image} source={require('../assets/images/villaThree.jpg')} />
                    <View styles={styles.cardHoteldescriptionBody}>
                        <Title styles={styles.cardHoteldescription}>Paradise Hotel & Spa</Title>
                        <View style style={styles.cardHoteldescriptionSubTitle}>
                            <Paragraph style={styles.cardCityname}>Durban</Paragraph>
                            <Paragraph style={styles.cardCityPrice}>R 980.00</Paragraph>
                        </View>
                        <Paragraph style={styles.cardCityname}>Rooms: 4</Paragraph>
                        <Paragraph style={styles.cardCityname}>Guests: 8</Paragraph>
                        <Paragraph style={styles.cardCityname}>BEDS: 8</Paragraph>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.hotelCardBody}>
                    <Image style={styles.image} source={require('../assets/images/villaFour.jpg')} />
                    <View styles={styles.cardHoteldescriptionBody}>
                        <Title styles={styles.cardHoteldescription}>Paradise Hotel & Spa</Title>
                        <View style style={styles.cardHoteldescriptionSubTitle}>
                            <Paragraph style={styles.cardCityname}>Durban</Paragraph>
                            <Paragraph style={styles.cardCityPrice}>R 980.00</Paragraph>
                        </View>
                        <Paragraph style={styles.cardCityname}>Rooms: 4</Paragraph>
                        <Paragraph style={styles.cardCityname}>Guests: 8</Paragraph>
                        <Paragraph style={styles.cardCityname}>BEDS: 8</Paragraph>
                    </View>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default HotellCard

const styles = StyleSheet.create({
    hotelCardMainBody: {
        flexDirection: 'column',
        alignItems: 'center'
    }
    ,
    hotelCardBody: {
        width: 400,
        height: 160,
        marginTop: 20,
        borderRadius: 20,
        flexDirection: 'row',
        backgroundColor: '#D3E4CD'
    }
    ,
    image: {
        width: 140,
        height: 160,
        right: 0,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginRight: 20
    }
    ,
    cardHoteldescriptionBody: {
        flexDirection: 'column',
    }
    ,
    cardHoteldescription: {
        fontWeight: 900,
    }
    ,
    cardHoteldescriptionSubTitle: {
        flexDirection: 'row',
    }
    ,
    cardCityname: {
        color: 'grey',
        fontSize: 20,
        marginRight: 20
    },
    cardCityPrice: {
        color: '#69DADB',
        fontWeight: 600,
        fontSize: 20,
        top: -10

    }
    ,

    pageTitle: {
        marginTop: 20,
        fontWeight: 600,
        fontSize: 30,
    }
})
