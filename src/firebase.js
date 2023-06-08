// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgzpVF2sj6LSUMv6VoXEQWjZYtABf4yzU",
  authDomain: "smarthome-e18a8.firebaseapp.com",
  projectId: "smarthome-e18a8",
  storageBucket: "smarthome-e18a8.appspot.com",
  messagingSenderId: "246927386919",
  appId: "1:246927386919:web:694f0aec386cebf3446102",
  measurementId: "G-2HJ2FXM8Q0"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Exports
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const firestore = firebase.firestore();
