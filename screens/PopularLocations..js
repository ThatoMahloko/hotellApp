import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, SafeAreaView } from 'react-native'
import { Title } from 'react-native-paper'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const PopularLocations = () => {
    return (
        <SafeAreaView style={styles.popularView}>
            <Title style={styles.pageTitle}>Popular locations</Title>

            <TouchableOpacity style={styles.locationCard}>
                <Image style={styles.location} source={require('../assets/images/cityOne.jpg')} />
                <Title style={styles.text}>Port Elizabeth</Title>
            </TouchableOpacity>

            <TouchableOpacity style={styles.locationCard}>
                <Image style={styles.location} source={require('../assets/images/cityTwo.jpg')} />
                <Title style={styles.text}>Durban</Title>
            </TouchableOpacity>


            <TouchableOpacity style={styles.locationCard}>
                <Image style={styles.location} source={require('../assets/images/cityThree.jpg')} />
                <Title style={styles.text}>Cape Town</Title>
            </TouchableOpacity>

            <TouchableOpacity style={styles.locationCard}>
                <Image style={styles.location} source={require('../assets/images/cityOne.jpg')} />
                <Title style={styles.text}>Port Elizabeth</Title>
            </TouchableOpacity>

            <TouchableOpacity style={styles.locationCard}>
                <Image style={styles.location} source={require('../assets/images/cityTwo.jpg')} />
                <Title style={styles.text}>Durban</Title>
            </TouchableOpacity>


            <TouchableOpacity style={styles.locationCard}>
                <Image style={styles.location} source={require('../assets/images/cityThree.jpg')} />
                <Title style={styles.text}>Cape Town</Title>
            </TouchableOpacity>


        </SafeAreaView>
    )
}

export default PopularLocations

const styles = StyleSheet.create({
    popularView: {
        alignItems: 'center',
        width: windowWidth
    }
    ,
    pageTitle: {
        marginTop: 20,
        fontWeight: "600",
        fontSize: 30,
    }
    ,
    locationCard: {
        width: windowWidth - 70,
        margin: 20

    }
    ,
    location: {
        width: '100%',
        height: 150,
        borderRadius: 20,
    }
    ,
    text: {
        color: 'white',
        position: 'absolute',
        top: 100,
        marginLeft: 15

    }
})
