import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions, Image, TouchableOpacity, Touchable, ImageBackground } from 'react-native'
import { Card, Title } from 'react-native-paper';
import CityCard from '../components/CityCard';
import LocationCard from '../components/LocationCard';
const { width, height } = Dimensions.get('screen')
import ScrollCard from '../components/ScrollCard'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoreHotels from './MoreHotels';
import { db } from '../config/firebase';

function Home({ navigation, route }) {
    const [rooms, setRooms] = useState([])
    const [locations, setLocations] = useState([])

    const getHotel = (() => {
        db.collection('cities')
            .onSnapshot((snapshot) => {
                const dis = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setRooms(dis);
                console.log(rooms)
            });

            db.collection('popularLocations')
            .onSnapshot((snapshot) => {
                const dis = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setLocations(dis);
                console.log(rooms)
            });
    })

  

    useEffect(() => {
        getHotel();

    }, []);
    return (
        <View>

            <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>

                <View style={styles.home}>
                    <ScrollView contentContainerStyle={styles.scroll} horizontal={true} showsHorizontalScrollIndicator={true} indicatorStyle={'white'}>
                        <View style={styles.hotelBody}>
                            {rooms.map((data) => {
                                return (
                                    <Card key={data.id} style={styles.body}>
                                        <ImageBackground style={styles.back} source={{ uri: data.coverImage }}>
                                            <View style={styles.cardContent}>
                                                <Title style={styles.label}>{data.city}</Title>
                                                <View style={styles.bottomCOntentRow}>
                                                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Hotel', data)}>
                                                        <Text style={styles.buttonText}>BOOK HOTEL</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </ImageBackground>
                                    </Card>
                                )
                            })}


                        </View >
                    </ScrollView>

                    <Title style={styles.title}>Recently Booked</Title>
                    <TouchableOpacity onPress={() => navigation.navigate('More')}>
                        <Title style={styles.text}>View All</Title>
                    </TouchableOpacity>

                    <ScrollView contentContainerStyle={styles.scroll} horizontal showsHorizontalScrollIndicator={false} indicatorStyle={'white'}>
                        {rooms.map((data) => {
                            return (
                                <View key={data.id}>
                                    <CityCard data={data} />
                                </View>
                            )
                        })}
                    </ScrollView>

                    <Title style={styles.title}>Popular Locations</Title>

                    <TouchableOpacity onPress={() => navigation.navigate('Popular')}>
                        <Title style={styles.text}>View All</Title>
                    </TouchableOpacity>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {locations.map((data) => {
                            return (
                                <LocationCard data={data} />
                            )
                        })}
                    </ScrollView>

                </View>
            </ScrollView >
        </View >
    )
}

export default Home

const styles = StyleSheet.create({
    home:
        { backgroundColor: '#FEFBF3' }
    ,

    scroll: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 0,
        paddingRight: 0,
    }
    ,
    card: {
        height: 350,
        width: width - 10,
        marginHorizontal: 10
    }
    ,
    back: {
        width: width,
        height: 350
    }
    ,
    text: {
        color: '#69DADB',
        fontWeight: "600",
        fontSize: 15,
        textAlign: 'right',
        marginRight: 10
    }
    ,
    title: {
        fontSize: 30,
        fontWeight: "600",
        marginTop: 20
    }
    ,
    hotelBody: {
        flexDirection: 'row'
    }
    ,
    body: {
        margin: 2,
    }
    ,
    back: {
        width: width,
        height: 350,
    }
    ,
    cardContent: {
        top: 220
    }
    ,
    label: {
        color: 'white',
        fontWeight: "300",
        fontSize: 31,
        margin: 8
    }
    ,
    bottomCOntentRow: {
        flexDirection: 'row',
        alignItems: 'center'
    }
    ,
    button: {
        width: 190,
        height: 70,
        backgroundColor: '#69DADB',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 8
    }
    ,
    buttonText: {
        color: 'white',
        fontSize: 24
    }
    ,
    moreNavText: {
        color: 'white',
        fontSize: 24,
        fontWeight: '300',
    }
})
