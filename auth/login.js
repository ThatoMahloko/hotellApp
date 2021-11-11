import { firebase } from '../config/firebase'
import { useNavigation } from '@react-navigation/native'

function login(email, password, navigation) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        alert('Welcome');
        navigation.navigate("Home");
    }).catch((err) => {
        console.log(err)
    })
}

export default login