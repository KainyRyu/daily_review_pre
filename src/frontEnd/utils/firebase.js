import firebase from 'firebase/app';
import 'firebase/auth';
// import 'firebase/firebase-firestore';

  // Your web app's Firebase configuration
  var config = {
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
  class Firebase {
    constructor() {
      firebase.initializeApp(config)
      this.auth = firebase.auth()
      this.db = firebase.firestore()
    }
    login(email, password) {
      return this.auth.signInWithEmailAndPassword(email, password)
    }
    logout() {
      return this.auth.signOut()
    }
    
    async register(name, email, password) {
      await this.auth.createUserWithEmailAndPassword(email, password)
      return this.auth.currentUser.updateProfile({
        displayName: name
      })
    }
  }


  export default new Firebase();