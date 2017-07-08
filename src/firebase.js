import firebase from 'firebase';

// Config Object
const config = {
 apiKey: "AIzaSyADRI2gO6THs15NqkpPmE-ADSMyHkKPOVU",
 authDomain: "based-gawd.firebaseapp.com",
 databaseURL: "https://based-gawd.firebaseio.com",
 projectId: "based-gawd",
 storageBucket: "",
 messagingSenderId: "419960215023"
};

// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
