import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Card, Title, Paragraph } from 'react-native-paper'
import HotelMainBody from '../components/hotelMainBody'

function MoreHotels({ navigation }) {
    return (
        <SafeAreaView style={styles.hotelBody}>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                <View style={styles.hotelCardMainBody}>
                    <Title style={styles.pageTitle}>More Hotels</Title>

                    <TouchableOpacity style={styles.touchCard} onPress={() => navigation.navigate('Hotel')}>
                        <HotelMainBody />
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
    touchCard: {
        borderWidth: 0.6,
        borderColor: "#000",
        margin: 10,
        borderRadius: 10,
    }
    ,
    pageTitle: {
        marginTop: 20,
        fontWeight: "600",
        fontSize: 30,
    }
})
