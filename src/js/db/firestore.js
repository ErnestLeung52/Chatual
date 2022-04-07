// Import the functions you need from the SDKs you need
// import { getAnalytics } from 'firebase/analytics';
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';

import firebase from 'firebase/app';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: 'AIzaSyB4v2iNrXxLD0NWMXL5_qOQYk254nBfETU',
  authDomain: 'electron-chat-c1984.firebaseapp.com',
  projectId: 'electron-chat-c1984',
  storageBucket: 'electron-chat-c1984.appspot.com',
  messagingSenderId: '192214690105',
  appId: '1:192214690105:web:bd986302471f91733fa0e8',
  measurementId: 'G-FXN20TTV2M',
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// // Initialize Firestore
// const db = getFirestore(app);

// export default db;

export const { Timestamp } = firebase.firestore;
export default firebase.initializeApp(config).firestore();
