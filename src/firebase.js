import firebase from 'firebase'



const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBBzaZDQ4DfAsfFMt7r1Wwu9x4ZQkogMr4",
    authDomain: "messenger-clone-mkrus.firebaseapp.com",
    projectId: "messenger-clone-mkrus",
    storageBucket: "messenger-clone-mkrus.appspot.com",
    messagingSenderId: "1069194490712",
    appId: "1:1069194490712:web:826db4c1763860e91e2b2d",
    measurementId: "G-1LK9PD138Z"
})

const db = firebaseApp.firestore()

export default db