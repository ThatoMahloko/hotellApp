import { getAuth, updatePassword } from "firebase/auth";
import {firebase} from '../config/firebase'
const sendPasswordResetMail = (email) => {
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
    alert('Password reset email sent!')
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}

export default sendPasswordResetMail
