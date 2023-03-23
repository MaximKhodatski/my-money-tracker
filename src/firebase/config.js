import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCxIqauWqIWbzaLZV_X8hauYuEMz6vniTg",
  authDomain: "my-money-tracker-7be7d.firebaseapp.com",
  projectId: "my-money-tracker-7be7d",
  storageBucket: "my-money-tracker-7be7d.appspot.com",
  messagingSenderId: "646010308275",
  appId: "1:646010308275:web:272c0f1ab23c6a3123d2c6"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }