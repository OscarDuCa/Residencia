import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";
import { showMessage2 } from "./showMessage.js";


const googleButton = document.querySelector("#glogin");
const Modal2 = document.querySelector('.modal2');
googleButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const provider = new GoogleAuthProvider();
  try {
    const credentials = await signInWithPopup(auth, provider)
    console.log(credentials);
    console.log("google sign in");

    // show welcome message
    showMessage("Bienvenido " + credentials.user.displayName);
    Modal2.classList.remove('modal2--show');
  } catch (error) {
    (error.code === 'auth/popup-closed-by-user') 
        showMessage2('¿Quieres usar otro metodo?')
  }
});

const gb = document.querySelector("#gloging");
const Modal = document.querySelector('.modal');
gb.addEventListener("click", async (e) => {
  e.preventDefault();

  const provider = new GoogleAuthProvider();
  try {
    const credentials = await signInWithPopup(auth, provider)
    console.log(credentials);
    console.log("google sign in");

    showMessage("Bienvenido " + credentials.user.displayName);
    Modal.classList.remove('modal--show');
} catch (error) {
    (error.code === 'auth/popup-closed-by-user') 
        showMessage2('¿Quieres usar otro metodo?')
    

}
});