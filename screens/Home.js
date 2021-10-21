import React from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions, Image, TouchableOpacity, Touchable } from 'react-native'
import { Card, Title } from 'react-native-paper'
import CityCard from '../components/CityCard'
import LocationCard from '../components/LocationCard'
const { width, height } = Dimensions.get('screen')
import ScrollCard from '../components/ScrollCard'

const Home = ({ navigation }) => {
    return (
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
            <View style={{ backgroundColor: 'white' }}>
                <ScrollView contentContainerStyle={styles.scroll} horizontal showsHorizontalScrollIndicator={true} indicatorStyle={'white'}>
                    <ScrollCard />
                    <ScrollCard />
                </ScrollView>

                <Title style={styles.title}>Recently Booked</Title>
                <TouchableOpacity>
                    <Title style={styles.text}>View All</Title>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={styles.scroll} horizontal showsHorizontalScrollIndicator={false} indicatorStyle={'white'}>
                    <TouchableOpacity>
                        <CityCard />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <CityCard />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <CityCard />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <CityCard />
                    </TouchableOpacity>
                </ScrollView>
                <Title style={styles.title}>Popular Locations</Title>
                <TouchableOpacity>
                    <Title style={styles.text}>View All</Title>
                </TouchableOpacity>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <LocationCard />
                    <LocationCard />
                    <LocationCard />
                    <LocationCard />
                </ScrollView>
            </View>



        </ScrollView>
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
        fontSize: 24,
        textAlign: 'right',
        marginRight: 10
    }
    ,
    title: {
        fontSize: 30,
        fontWeight: 600,
        marginTop: 20
    }
})
