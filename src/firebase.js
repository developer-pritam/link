import firebase from "firebase/app";
import "firebase/database"

var firebaseConfig = {

    apiKey: "AIzaSyB3zaQ_Qkv5L-vUnl1HtcyDb6xI6Qrz3SM",
    // authDomain: "jsfbwebsitergb.firebaseapp.com",
    databaseURL: "https://jsfbwebsitergb-default-rtdb.firebaseio.com",
    // projectId: "jsfbwebsitergb",
    // storageBucket: "jsfbwebsitergb.appspot.com",
    // messagingSenderId: "144060401749",
    // appId: "1:144060401749:web:7ea248344eeab539ef6cdc",


};

firebase.initializeApp(firebaseConfig);
export let mainFB = firebase.database();
