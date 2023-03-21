import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { auth} from './firebase.js'
import { loginCheck } from './loginCheck.js'

import './reset.js'
import './regis.js'
import './baja.js'
import './entrar.js'
import './loginCheck.js'
import './google.js'

onAuthStateChanged(auth, async (user) =>{
    loginCheck(user)
    //if (user) {
    //}else{
     //   loginCheck(user)
    //}
})