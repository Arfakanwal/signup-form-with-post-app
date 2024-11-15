import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,onAuthStateChanged, sendEmailVerification, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyClGjUEM1ZFaaPWtNrm9auRJWZ_iVhc0R8",
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth ,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signOut }