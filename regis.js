
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";
const Modal = document.querySelector('.modal');
const formulario = document.querySelector('#formulario')
const allowedDomains = ["@gmail.com", "@hotmail.com", "@outlook.com"]
const isAllowedDomain = (email) => {
    return allowedDomains.some((domain) => email.includes(domain))
}


document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        Modal.classList.remove('modal--show');

    }
})
formulario.addEventListener('submit', async (e) => {
    e.preventDefault()



    const email = formulario['Correo'].value
    const password = formulario['Contraseña'].value
    try {
        if(!isAllowedDomain(email)) throw new Error('invalid-email')
        if (password.length < 8) throw new Error("password-short")


        const userC = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userC)
        showMessage("Bienvenido " + userC.user.email)
        e.preventDefault();
        Modal.classList.remove('modal--show');

    } catch (error) {

        if (error.code === 'auth/email-already-in-use') {
            showMessage('Correo ya registrado.  ', 'error')
        } else if (error.code === 'auth/invalid-email') {
            showMessage('Correo invalido.  ', 'error')
        } else if (error.code === 'auth/weak-password') {
            showMessage('La contraseña no es segura.  ', 'error')       
        } else if (error.message === "password-short") {
            showMessage("La contraseña debe tener al menos 8 caracteres", 'error')
        } else if (error.code === 'auth/network-request-failed') {
            showMessage('Verifica tu conexión a internet', 'error')
        } else if (error.message === "invalid-email") {
            showMessage("Ingresa un correo valido", 'error')
        } else if (error.code) {
            showMessage(error.message, 'error')
        }

    }
}) 
