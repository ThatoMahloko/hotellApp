import { firebase } from '../config/firebase'
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'

function login(email, password, navigation) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        alert('Welcome');
        navigation.navigate("Home");
    }).catch((err) => {
        console.log(err)
        alert(err)
    })
}

export default login