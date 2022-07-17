// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPtbzCTWdsNkzeyMWNqrSl8EUR14H3Yq8",
    authDomain: "mealdeal-91564.firebaseapp.com",
    databaseURL: "https://mealdeal-91564-default-rtdb.firebaseio.com",
    projectId: "mealdeal-91564",
    storageBucket: "mealdeal-91564.appspot.com",
    messagingSenderId: "157958802100",
    appId: "1:157958802100:web:ca769b66e50e2a306be5e1"
};

// Initialize Firebase

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const firestore = getFirestore(app);
const storage = getStorage(app)

export { app, firestore, storage };