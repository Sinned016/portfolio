// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDsLd8Bf_oxmC4e1opl-sTR7I5JTKqbSUQ',
  authDomain: 'portfolio1-2b8d3.firebaseapp.com',
  projectId: 'portfolio1-2b8d3',
  storageBucket: 'portfolio1-2b8d3.appspot.com',
  messagingSenderId: '5580569715',
  appId: '1:5580569715:web:bacefc6f27093ebb5a3e06',
  measurementId: 'G-0YDBT31RV4'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const storage = getStorage(app)
const db = getFirestore(app)

export default db
