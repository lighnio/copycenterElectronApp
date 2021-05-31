import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDVAd8DLVzTwjmSdwEIKEEfYlbEvj_YlIw",
    authDomain: "copy-center-e6519.firebaseapp.com",
    projectId: "copy-center-e6519",
    storageBucket: "copy-center-e6519.appspot.com",
    messagingSenderId: "957933006617",
    appId: "1:957933006617:web:cb88daab02e1d341c61f88",
    measurementId: "G-MCPX2ZPND5"
  };

  const fireb = firebase.initializeApp(config)
  const store = firebase.firestore()

  // Initialize Firebase
  
  export {store}