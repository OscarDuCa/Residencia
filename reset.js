import { sendPasswordResetEmail  } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage2 } from "./showMessage.js";
import { showMessage } from "./showMessage.js";

const rbutton = document.getElementById("rpass");
const loginEmail = document.getElementById("login-email");

rbutton.addEventListener("click", () => {
const email = loginEmail.value
try {
    sendPasswordResetEmail(auth, email)
    showMessage2("Revisa tu bandeja de correo (SPAM)");
  } catch (error) {
    showMessage(error.message, 'error')
        
  }
});