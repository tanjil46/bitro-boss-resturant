// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

 // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey:'AIzaSyDk_Nwm7ZV1YQKftuU5xI0_iwzLfX0rLhM',
    authDomain:'bistro-boss-re-f0adc.firebaseapp.com',
  projectId:'bistro-boss-re-f0adc',
   storageBucket:'bistro-boss-re-f0adc.appspot.com',
   messagingSenderId:'98053019251',
   appId:'1:98053019251:web:25e67788b20b8751937c06'
};

// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth;