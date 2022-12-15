// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFOHZVX5duRNL6nDHUAp9YxOcpPc4GelE",
    authDomain: "teamb-1bdda.firebaseapp.com",
    projectId: "teamb-1bdda",
    storageBucket: "teamb-1bdda.appspot.com",
    messagingSenderId: "409296128775",
    appId: "1:409296128775:web:8dc59b330155304641d3a2"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
const firebaseAuth = getAuth(app);
export { firebaseAuth };