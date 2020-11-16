import firebase from 'firebase';
// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAgDJNJV4hueBmLIEXwZY-KuaDvSzhho0c",
    authDomain: "trado-e645f.firebaseapp.com",
    databaseURL: "https://trado-e645f.firebaseio.com",
    projectId: "trado-e645f",
    storageBucket: "trado-e645f.appspot.com",
    messagingSenderId: "359144135692",
    appId: "1:359144135692:web:8c8a996d5f8cf14207a229",
    measurementId: "G-LY0TX6T1VN"
  };
// Initialize Firebase

export var firebase_app = firebase.initializeApp(firebaseConfig);
const analytics = firebase_app.analytics();
var auth = firebase_app.auth();
export var db = firebase.firestore();
