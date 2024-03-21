// firebase-config.js
// Your web app's Firebase configuration
import firebase from 'firebase/app';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyB0stCkFLyNFJI20FmE0zaFzTP2KBPEY70",
    authDomain: "fixflow-e3983.web.app",
    projectId: "fixflow-e3983",
    storageBucket: "gs://fixflow-e3983.appspot.com",
    messagingSenderId: "354057994820",
    appId: "1:354057994820:android:17ec58985318af2b54b211"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();
  export default firebase;
  