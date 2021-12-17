// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBHy8LZDIEQZ54qkeVNuIBIsOSS27SeHNY',
  authDomain: 'work-from-home-ke.firebaseapp.com',
  projectId: 'work-from-home-ke',
  storageBucket: 'work-from-home-ke.appspot.com',
  messagingSenderId: '426102749862',
  appId: '1:426102749862:web:744e6beb9918cccd491267',
  measurementId: 'G-DZD1TM2B73',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
