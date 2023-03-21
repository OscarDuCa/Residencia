import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { auth } from './firebase.js'
import { showMessage } from "./showMessage.js";

const Modal2 = document.querySelector('.modal2');
const formulario = document.querySelector('#formulariop')
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        Modal2.classList.remove('modal2--show');
    }
  })
formulario.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = formulario['login-email'].value
    const password = formulario['login-password'].value

    try {

        const credents = await signInWithEmailAndPassword(auth, email, password)
        console.log(credents)
        showMessage('Bienvenido ' + credents.user.email)
        e.preventDefault();
        Modal2.classList.remove('modal2--show');

    } catch (error) {

        if (error.code === 'auth/wrong-password') {
            showMessage('Contraseña incorrecta', 'error')
        } else if (error.code === 'auth/user-not-found') {
            showMessage('Usuario no registrado', 'error')
        } else if (error.code === 'auth/internal-error') {
            showMessage('Ingresa todos los campos', 'error')
        } else if (error.code === 'auth/invalid-email') {
            showMessage('Contraseña o correo erroneo', 'error')
        } else if (error.code === 'auth/too-many-requests') {
            showMessage('Has excedido el número de intentos permitidos,\n vuelve a intentarlo en media hora', 'error')
        } else if (error.code === 'auth/network-request-failed') {
            showMessage('Verifica tu conexión a internet', 'error')
        } else {
            showMessage(error.message, 'error')
        }
    }
})