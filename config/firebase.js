// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Constants from 'expo-constants';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJRpOYUMutgIfAP7r1YD3oJYDCNEXeJYc",
  authDomain: "fir-2d19d.firebaseapp.com",
  projectId: "fir-2d19d",
  storageBucket: "fir-2d19d.appspot.com",
  messagingSenderId: "575235802509",
  appId: "1:575235802509:web:997be27d57fb72dd4629c4",
  measurementId: "G-8BTHGPX959",
  databaseURL:Constants.manifest2.extra.databaseURL
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth=getAuth();
export const database=getFirestore();