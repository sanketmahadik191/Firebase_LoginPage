import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxSVan-kcVv7ZmPfnQsfZTjDmaSbJ6Y2A",
  authDomain: "fir-auth-80135.firebaseapp.com",
  projectId: "fir-auth-80135",
  storageBucket: "fir-auth-80135.appspot.com",
  messagingSenderId: "448104759051",
  appId: "1:448104759051:web:a7c6073aa5bee9d8576c0e",
  measurementId: "G-Q896FVTTW9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
