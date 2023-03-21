import { signOut } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { auth } from './firebase.js'
import { showMessage2 } from "./showMessage.js";


const logout = document.querySelector('#logout')
logout.addEventListener('click', async () => {
await signOut(auth)
showMessage2('Sesión cerrada')
})