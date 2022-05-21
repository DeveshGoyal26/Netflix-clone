// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDbQIIDX1sUpNwGerD3_vsiWWokpx6bJik',
  authDomain: 'netflix-clone-b482e.firebaseapp.com',
  projectId: 'netflix-clone-b482e',
  storageBucket: 'netflix-clone-b482e.appspot.com',
  messagingSenderId: '1062146676950',
  appId: '1:1062146676950:web:572135ccf4d47f35e19177',
  measurementId: 'G-49BP7586CX',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
