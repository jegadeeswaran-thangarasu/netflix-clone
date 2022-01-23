import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyChUfusBmwjqCWlYYxAl31LB1ZbWRqtxNQ",
    authDomain: "netflix-clone-542a7.firebaseapp.com",
    projectId: "netflix-clone-542a7",
    storageBucket: "netflix-clone-542a7.appspot.com",
    messagingSenderId: "615702184596",
    appId: "1:615702184596:web:462ebba6584879106d6a81"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;