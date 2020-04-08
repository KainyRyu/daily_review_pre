import firebase from 'firebase/app';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDJ2KCHI8RuMx2TH7kXJcfR3ESXnVfFq4U",
    authDomain: "dailyreview-7e684.firebaseapp.com",
    databaseURL: "https://dailyreview-7e684.firebaseio.com",
    projectId: "dailyreview-7e684",
    storageBucket: "dailyreview-7e684.appspot.com",
    messagingSenderId: "847501678222",
    appId: "1:847501678222:web:5dc4bc42703526941e1bdf",
    measurementId: "G-HN9VLB1Z87"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;