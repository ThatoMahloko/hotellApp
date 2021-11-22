import React, { useState } from 'react'
import { StyleSheet, View, Dimensions, ImageBackground, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Title, Card, Paragraph, Text, Button, Modal, Portal, Provider, TextInput } from 'react-native-paper'
const { width, height } = Dimensions.get('screen')
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Hotel = () => {
    const [visible, setVisible] = useState(false);
    const [text, setText] = useState('');
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20, width: width - 60, alignSelf: 'center' };

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };


    return (
        <SafeAreaView style={styles.hotel}>
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

            <Text style={styles.paragraph}>
                Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Eaque
                inventore ab porro amet molestias
                autem? Cumque illo perspiciatis sint
                iure.
            </Text>

            <View style={styles.horizontalRef} />

            <ScrollView style={{ marginTop: 30, zIndex: 1 }} horizontal={true}>
                <Image style={styles.roomView} source={require('../assets/rooms/bedRoom.jpg')} />

                <Image style={styles.roomView} source={require('../assets/rooms/balcony.jpg')} />

                <Image style={styles.roomView} source={require('../assets/rooms/poolArea.jpg')} />

                <Image style={styles.roomView} source={require('../assets/rooms/shower.jpg')} />
            </ScrollView>

            <Provider>
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                        <TextInput
                            label="Email"
                            value={text}
                            onChangeText={text => setText(text)}
                        />
                        <Button style={styles.button} onPress={showDatePicker}>
                            <Text style={styles.buttonText}>DATE</Text>
                        </Button>
                    </Modal>
                </Portal>

                <Button onPress={showModal} style={styles.button}>
                    <Text style={styles.buttonText}>BOOK HOTEL</Text>
                </Button>
            </Provider>

            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />

        </SafeAreaView>
    )
}

export default Hotel

const styles = StyleSheet.create({
    hotel: {
        backgroundColor: '#fff'
    }
    ,
    hotelCover: {
        width: width,
        height: 350,
        padding: 10
    }
    ,
    hotelTitle: {
        fontWeight: "600",
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
    horizontalRef: {
        alignSelf: 'center',
        width: width - 60,
        borderBottomColor: '#69DADB',
        borderBottomWidth: 2,
        marginTop: 20
    }
    ,
    roomView: {
        height: 140,
        width: 140,
        borderRadius: 20,
        margin: 10,
        zIndex: 0
    }
    ,
    fullView: {
        height: 300,
        width: 300,
        margin: 20
    }
    ,
    button: {
        width: 190,
        height: 50,
        backgroundColor: '#69DADB',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 8,
        alignSelf: 'center'
    }
    ,
    buttonText: {
        color: 'white',
        fontSize: 20
    }
    ,
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})
