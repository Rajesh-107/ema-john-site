// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAweIdoQ6p_nmaAK7wsICjT1GHI2g1J2Bs",
    authDomain: "ema-jhon-simple-f4f81.firebaseapp.com",
    projectId: "ema-jhon-simple-f4f81",
    storageBucket: "ema-jhon-simple-f4f81.appspot.com",
    messagingSenderId: "983051462384",
    appId: "1:983051462384:web:5af97ba4d26729123c4435"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;