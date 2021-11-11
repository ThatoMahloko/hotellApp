import React, { useState } from 'react'
import { StyleSheet, View, Dimensions, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Title, Card, Paragraph, Modal, Portal, Text, Button, Provider } from 'react-native-paper'
const { width, height } = Dimensions.get('screen')

const Hotel = () => {
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20, textAlign: 'center', width: width, alignSelf: 'center' };
    return (
        <View>
            <ImageBackground style={styles.hotelCover} source={require('../assets/images/hotelCover.jpg')}>
                <Title style={styles.hotelTitle}>Paradise Hotel & Spa</Title>
                <View style={styles.fiveStar}>
                    <Image style={styles.star} source={require('../assets/icons/star.png')} />
                    <Image style={styles.star} source={require('../assets/icons/star.png')} />
                    <Image style={styles.star} source={require('../assets/icons/star.png')} />
                    <Image style={styles.star} source={require('../assets/icons/star.png')} />
                    <Image style={styles.star} source={require('../assets/icons/star.png')} />
                </View>
            </ImageBackground>
            <Card>
                <View style={styles.servicesList}>
                    <Image style={styles.serviceIcon} source={require('../assets/icons/roomService.png')} />
                    <Image style={styles.serviceIcon} source={require('../assets/icons/wifi.png')} />
                    <Image style={styles.serviceIcon} source={require('../assets/icons/beds.png')} />
                    <Image style={styles.serviceIcon} source={require('../assets/icons/bar.png')} />
                </View>
            </Card>

            <Paragraph style={styles.paragraph}>
                Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Eaque
                inventore ab porro amet molestias
                autem? Cumque illo perspiciatis sint
                iure.
            </Paragraph>

            <Provider>
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <Image style={styles.fullView} source={require('../assets/rooms/bedRoom.jpg')} />

                    </Modal>
                </Portal>
            </Provider >
            <ScrollView style={{ marginTop: 30 }} horizontal={true}>
                <TouchableOpacity onPress={showModal}>
                    <Image style={styles.roomView} source={require('../assets/rooms/bedRoom.jpg')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={showModal}>
                    <Image style={styles.roomView} source={require('../assets/rooms/bedRoom.jpg')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={showModal}>
                    <Image style={styles.roomView} source={require('../assets/rooms/bedRoom.jpg')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={showModal}>
                    <Image style={styles.roomView} source={require('../assets/rooms/bedRoom.jpg')} />
                </TouchableOpacity>
            </ScrollView>

        </View>
    )
}

export default Hotel

const styles = StyleSheet.create({
    hotelCover: {
        width: width,
        height: 350,
        padding: 10
    }
    ,
    hotelTitle: {
        fontWeight: 600,
        fontSize: 30,
        color: '#fff',
        marginTop: 30
    }
    ,
    fiveStar: {
        flexDirection: 'row'
    }
    ,
    star: {
        width: 30,
        height: 30
    }
    ,
    servicesList: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
    ,
    serviceIcon: {
        width: 80,
        height: 80,
        margin: 10
    }
    ,
    paragraph: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 20
    }
    ,
    roomView: {
        height: 140,
        width: 140,
        borderRadius: 20,
        margin: 10
    }
    ,
    fullView:{
        height:100,
        width:100, 
        margin:20
    }
})
