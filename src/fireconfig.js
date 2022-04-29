// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgPOVKq9SkIy3wCCsyacQs5EslqyAzZhc",
  authDomain: "aestrix-app.firebaseapp.com",
  projectId: "aestrix-app",
  storageBucket: "aestrix-app.appspot.com",
  messagingSenderId: "857395496948",
  appId: "1:857395496948:web:712884169d9592765f5ba1",
  measurementId: "G-P820421TV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
export default fireDB;