import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBQmnnMq1fTLMpNRAdRYb0hKMC2kxM7DIU",
  authDomain: "easylist-b96dd.firebaseapp.com",
  databaseURL: "https://easylist-b96dd-default-rtdb.firebaseio.com",
  projectId: "easylist-b96dd",
  storageBucket: "easylist-b96dd.appspot.com",
  messagingSenderId: "341038211651",
  appId: "1:341038211651:web:66593730fda335b886aaf6",
  measurementId: "G-M0H9WZPH13"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase, auth};