import firebase from 'firebase';


const config={
    apiKey: "AIzaSyD9PAzQU5yedRKmzsren095RBHi5KAX86o",
  authDomain: "zulfiapp-75599.firebaseapp.com",
  databaseURL: "https://zulfiapp-75599-default-rtdb.firebaseio.com",
  projectId: "zulfiapp-75599",
  storageBucket: "zulfiapp-75599.appspot.com",
  messagingSenderId: "846846820599",
  appId: "1:846846820599:web:2caf8b2dc628c7a32393f2",
  measurementId: "G-38MV7ME1DV"


}

const Fire = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

export default Fire;