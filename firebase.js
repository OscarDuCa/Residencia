  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB54Gzq-vm01UYscMZeN7ae4tbymddAtgc",
    authDomain: "residenciapiapia.firebaseapp.com",
    projectId: "residenciapiapia",
    storageBucket: "residenciapiapia.appspot.com",
    messagingSenderId: "346295365679",
    appId: "1:346295365679:web:2a6eae84d87b7c3ea456da"
    
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);

  
