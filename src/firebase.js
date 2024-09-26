import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Corrected the config name to match the one used in initialization
const firebaseConfig = {
  apiKey: "AIzaSyAZ3G-jq7dnmmpUglhLXU-1DOFL8ZY2Pas",
  authDomain: "authentication-51870.firebaseapp.com",
  projectId: "authentication-51870",
  storageBucket: "authentication-51870.appspot.com",
  messagingSenderId: "272317961348",
  appId: "1:272317961348:web:7b7329a44aefd50b6c5ed1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  // Use firebaseConfig

const auth = getAuth(app);

export { auth };
