
// import { initializeApp } from "firebase/app";
// import {getFirestore} from '@firebase/firestore';

// import firebase from "firebase/app";

// import 'Firebase/firestore';

// import "firebase/auth";

// import "firebase-firestore.memory/storage";
import firebase from "firebase";
import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyA3c33V",
    authDomain: "disneyplus-clone-4862b.firebaseapp.com",
    projectId: "disneyplus-clone-4862b",
    storageBucket: "disneyplus-clone-4862b.appspot.com",
    messagingSenderId: "10348865226",
    appId: "1:10348865226:web:7f7613591224e921ba3633",
    measurementId: "G-974H6Q2JTB"

};

// Initialize Firebase


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

// const app= initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
//now we established a connection
// export const db = getFirestore(app);

export { auth, provider, storage };
export default db;
