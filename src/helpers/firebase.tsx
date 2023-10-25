import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBd16MjSNjgPoC9kUSw2VSICiAEZjwi1tM",
  authDomain: "nubiaville-5439d.firebaseapp.com",
  projectId: "nubiaville-5439d",
  storageBucket: "gs://nubiaville-5439d.appspot.com",
  messagingSenderId: "40538881530",
  appId: "1:40538881530:web:d023e5f17aaabaef29f843",
  measurementId: "G-TSTM8TNNX2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
const storage = firebaseApp.storage();
const ref = firebaseApp.storage().ref();

export { auth, db, storage, ref };
