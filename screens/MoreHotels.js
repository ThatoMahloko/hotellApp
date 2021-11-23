import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Card, Title, Paragraph } from 'react-native-paper'
import HotellCard from '../components/HotellCard'

function MoreHotels({ navigation }) {
    return (
        <SafeAreaView style={styles.hotelBody}>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                <View style={styles.hotelCardMainBody}>
                    <Title style={styles.pageTitle}>More Hotels</Title>
                    <TouchableOpacity  onPress={() => navigation.navigate('Hotel')}>
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
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <View style={styles.hotelCardBody}>
                            <Image style={styles.image} source={require('../assets/images/villaTwo.jpg')} />
                            <View styles={styles.cardHoteldescriptionBody}>
                                <Text styles={styles.cardHoteldescription}>Paradise Hotel & Spa</Text>
                                <View style style={styles.cardHoteldescriptionSubTitle}>
                                    <Text><Paragraph style={styles.cardCityname}>Durban</Paragraph></Text>
                                    <Text><Paragraph style={styles.cardCityPrice}> R 980.00</Paragraph></Text>
                                </View>
                                <Text><Paragraph style={styles.cardCityname}>Rooms: 4</Paragraph></Text>
                                <Text><Paragraph style={styles.cardCityname}>Guests: 8</Paragraph></Text>
                                <Text><Paragraph style={styles.cardCityname}>BEDS: 8</Paragraph></Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <View style={styles.hotelCardBody}>
                            <Image style={styles.image} source={require('../assets/images/villaThree.jpg')} />
                            <View styles={styles.cardHoteldescriptionBody}>
                                <Text styles={styles.cardHoteldescription}>Paradise Hotel & Spa</Text>
                                <View style style={styles.cardHoteldescriptionSubTitle}>
                                    <Text><Paragraph style={styles.cardCityname}>Durban</Paragraph></Text>
                                    <Text><Paragraph style={styles.cardCityPrice}> R 980.00</Paragraph></Text>
                                </View>
                                <Text><Paragraph style={styles.cardCityname}>Rooms: 4</Paragraph></Text>
                                <Text><Paragraph style={styles.cardCityname}>Guests: 8</Paragraph></Text>
                                <Text><Paragraph style={styles.cardCityname}>BEDS: 8</Paragraph></Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <View style={styles.hotelCardBody}>
                            <Image style={styles.image} source={require('../assets/images/villaFour.jpg')} />
                            <View styles={styles.cardHoteldescriptionBody}>
                                <Text styles={styles.cardHoteldescription}>Paradise Hotel & Spa</Text>
                                <View style style={styles.cardHoteldescriptionSubTitle}>
                                    <Text><Paragraph style={styles.cardCityname}>Durban</Paragraph></Text>
                                    <Text><Paragraph style={styles.cardCityPrice}> R 980.00</Paragraph></Text>
                                </View>
                                <Text><Paragraph style={styles.cardCityname}>Rooms: 4</Paragraph></Text>
                                <Text><Paragraph style={styles.cardCityname}>Guests: 8</Paragraph></Text>
                                <Text><Paragraph style={styles.cardCityname}>BEDS: 8</Paragraph></Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default MoreHotels

const styles = StyleSheet.create({
    hotelBody: {
        alignItems: 'center',
        backgroundColor: '#FEFBF3'
    }
    ,

    hotelCardMainBody: {
        flexDirection: 'column',
        alignItems: 'center',
    }
    ,
    hotelCardBody: {
        width: 340,
        height: 160,
        marginTop: 20,
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

    pageTitle: {
        marginTop: 20,
        fontWeight: "600",
        fontSize: 30,
    }
})
