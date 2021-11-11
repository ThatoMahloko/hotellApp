import React from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions, Image, TouchableOpacity, Touchable, ImageBackground } from 'react-native'
import { Card, Title } from 'react-native-paper'
import CityCard from '../components/CityCard'
import LocationCard from '../components/LocationCard'
const { width, height } = Dimensions.get('screen')
import ScrollCard from '../components/ScrollCard'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoreHotels from './MoreHotels'

function Home({ navigation }) {
    return (
        <View>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                <View style={{ backgroundColor: '#FEFBF3' }}>
                    <ScrollView contentContainerStyle={styles.scroll} horizontal showsHorizontalScrollIndicator={true} indicatorStyle={'white'}>
                        <View style={styles.hotelBody}>
                            <Card style={styles.body}>
                                <ImageBackground style={styles.back} source={require('../assets/images/cardOne.jpg')}>
                                    <View style={styles.cardContent}>
                                        <Title style={styles.label}>CapeTown</Title>
                                        <View style={styles.bottomCOntentRow}>
                                            <TouchableOpacity style={styles.button}  onPress={()=> navigation.navigate('Hotel')}>
                                                <Text style={styles.buttonText}>BOOK HOTEL</Text>
                                            </TouchableOpacity>                                         
                                        </View>
                                    </View>
                                </ImageBackground>
                            </Card>
                            <Card style={styles.body}>
                                <ImageBackground style={styles.back} source={require('../assets/images/cardTwo.jpg')}>
                                    <View style={styles.cardContent}>
                                        <Title style={styles.label}>Sandton</Title>
                                        <View style={styles.bottomCOntentRow}>
                                            <TouchableOpacity style={styles.button}>
                                                <Text style={styles.buttonText}>BOOK HOTEL</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                                <Title style={styles.moreNavText}>MORE HOTELS+</Title>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </Card>

                        </View >                    </ScrollView>

                    <Title style={styles.title}>Recently Booked</Title>
                    <TouchableOpacity onPress={() => navigation.navigate('More')}>
                        <Title style={styles.text}>View All</Title>
                    </TouchableOpacity>
                    <ScrollView contentContainerStyle={styles.scroll} horizontal showsHorizontalScrollIndicator={false} indicatorStyle={'white'}>

                        <View>
                            <CityCard />
                        </View>

                    </ScrollView>
                    <Title style={styles.title}>Popular Locations</Title>
                    <TouchableOpacity onPress={() => navigation.navigate('Popular')}>
                        <Title style={styles.text}>View All</Title>
                    </TouchableOpacity>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <LocationCard />
                    </ScrollView>
                </View>



            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
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
        fontWeight: 600,
        fontSize: 15,
        textAlign: 'right',
        marginRight: 10
    }
    ,
    title: {
        fontSize: 30,
        fontWeight: 600,
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
        fontWeight: 300,
        fontSize: 40,
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
        fontWeight: '600',
    }
})
