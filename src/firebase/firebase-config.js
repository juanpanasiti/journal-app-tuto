import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyA1--f4gSP68s53mEgFKrK2l9byvnKX-Do',
    authDomain: 'react-app-curso-cf7a4.firebaseapp.com',
    projectId: 'react-app-curso-cf7a4',
    storageBucket: 'react-app-curso-cf7a4.appspot.com',
    messagingSenderId: '474039349742',
    appId: '1:474039349742:web:1a09115852204b7f8f9eff',
};

firebase.initializeApp(firebaseConfig);


const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {db, googleAuthProvider, firebase}