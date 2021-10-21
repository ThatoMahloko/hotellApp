import React from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions, Image, ImageBackground } from 'react-native'
import { Card, Title } from 'react-native-paper'
const { width, height } = Dimensions.get('screen')
import ScrollCard from '../components/ScrollCard'

const Home = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: 'white' }}>
            <ScrollView contentContainerStyle={styles.scroll} horizontal showsHorizontalScrollIndicator={true} indicatorStyle={'white'}>
                <ScrollCard />
                <ScrollCard />
                <ScrollCard />
                <ScrollCard />
                <ScrollCard />
            </ScrollView>

            <Title style={styles.title}>Recently Booked</Title>

            <ScrollView contentContainerStyle={styles.scroll} horizontal showsHorizontalScrollIndicator={true} indicatorStyle={'white'}>
       
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
    title: {
        fontSize: 30,
        fontWeight: 600,
        marginTop: 20
    }
})
