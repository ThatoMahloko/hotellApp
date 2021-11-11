import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Card } from 'react-native-paper'
import HotellCard from '../components/HotellCard'

function MoreHotels() {
    return (
        <View style={styles.hotelBody}>
            <ScrollView horizontal={false}>
                <HotellCard />      
            </ScrollView>
        </View>
    )
}

export default MoreHotels

const styles = StyleSheet.create({
    hotelBody:{
        alignItems:'center', 
        backgroundColor: '#FEFBF3'
    }
})
