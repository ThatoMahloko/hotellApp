import { firebase } from '../config/firebase';
import { useNavigation } from '@react-navigation/native';

function register(email, password, confrmpassword, navigation) {
    if (confrmpassword !== password) {
        alert('Passwords do not match');
    } else {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                firebase.firestore().collection('User').doc(email).set({
                    email: email,
                    password: password,
                })
                alert('Account successfully created ❤️')
                var user = userCredential.user;
                navigation.navigate('Login')
            }).catch((error) => {
                console.log(error)
            })
    }
}

export default register