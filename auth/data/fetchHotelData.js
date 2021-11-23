import { db } from '../../config/firebase'

function fetchHotelData(city) {
    const docRef = db.collection('cities').doc(city);

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data: ", doc.data())
        } else {
            console.log("No such document")
        }
    }).catch((error) => {
        console.log("Error getting document!", error)
    })
}

export default fetchHotelData