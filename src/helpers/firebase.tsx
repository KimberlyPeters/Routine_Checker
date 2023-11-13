import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAh5ReKmFBnYXG0a80envK5MaPgCifk3vY",
  authDomain: "routinechecker-app.firebaseapp.com",
  projectId: "routinechecker-app",
  storageBucket: "routinechecker-app.appspot.com",
  messagingSenderId: "1098039737226",
  appId: "1:1098039737226:web:655af8fae3fd3c4ed22673",
  measurementId: "G-M7Y3RCGSLK"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);


const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
const storage = firebaseApp.storage();
const ref = firebaseApp.storage().ref();

export { auth, db, storage, ref };
