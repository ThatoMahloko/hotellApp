import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, SafeAreaView } from 'react-native'
import { Title } from 'react-native-paper'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { db } from '../config/firebase';
const PopularLocations = ({navigation}) => {
    const [locations, setLocations] = useState([])

    const getLocations = (() => {
        db.collection('popularLocations')
            .onSnapshot((snapshot) => {
                const dis = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setLocations(dis);
                console.log(locations)
            });
    })

    useEffect(() => {
        getLocations();
    }, []);

    return (
        <SafeAreaView style={styles.popularView}>
            <Title style={styles.pageTitle}>Popular locations</Title>

            {locations.map((data) => {
                return (
                    <TouchableOpacity key={data.id} style={styles.locationCard} onPress={()=>navigation.navigate('More')}>
                        <Image style={styles.location} source={{ uri: data.coverImage }} />
                        <Title style={styles.text}>{data.City}</Title>
                    </TouchableOpacity>
                )
            })}




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
