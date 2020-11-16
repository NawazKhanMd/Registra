import firebase from 'firebase';
// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

var firebaseConfig = {
    
  };
// Initialize Firebase

export var firebase_app = firebase.initializeApp(firebaseConfig);
const analytics = firebase_app.analytics();
var auth = firebase_app.auth();
export var db = firebase.firestore();
