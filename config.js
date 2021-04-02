import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyBjSTwpv-S0bsE5OQ0ABEuNRr62Ovfw2RU",
  authDomain: "story-hub-b6998.firebaseapp.com",
  projectId: "story-hub-b6998",
  storageBucket: "story-hub-b6998.appspot.com",
  messagingSenderId: "986574350206",
  appId: "1:986574350206:web:f42fe8a67f210f1c19f52f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();