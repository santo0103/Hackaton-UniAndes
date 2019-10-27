import * as firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDnFkuFSpUQ3vQPvB_doqfy9wcdhSa8g3o",
    authDomain: "hackatun-fa2de.firebaseapp.com",
    databaseURL: "https://hackatun-fa2de.firebaseio.com",
    projectId: "hackatun-fa2de",
    storageBucket: "hackatun-fa2de.appspot.com",
    messagingSenderId: "544594328465",
    appId: "1:544594328465:web:878d2257b72f5ff8587830",
    measurementId: "G-K8TENC21JE"
};

firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export default firebase;
