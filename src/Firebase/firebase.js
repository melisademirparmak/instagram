import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDVlmqG0gD4rHxkCW1VoBBLCJDii7Q9bkk',
  authDomain: 'instagraam--clone.firebaseapp.com',
  projectId: 'instagraam--clone',
  storageBucket: 'instagraam--clone.appspot.com',
  messagingSenderId: '416290852575',
  appId: '1:416290852575:web:983201a60b6808292d236a',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();

export default firebase;
