const loggedInLinks = document.querySelectorAll('.logout')
const loggedOutLinks = document.querySelectorAll('.logged-out')
const Cboda = document.querySelectorAll('.CBoda')
const CB =document.querySelectorAll('#CB')
console.log(loggedOutLinks )
console.log(loggedInLinks )

export const loginCheck = user =>{
    if (user){
        loggedInLinks.forEach(link => link.style.display ='block')
        loggedOutLinks.forEach(link => link.style.display ='none')
        Cboda.forEach(link => link.style.display ='block')
        CB.forEach(link => link.style.display ='none')
    }else{
        loggedInLinks.forEach(link => link.style.display ='none')
        loggedOutLinks.forEach(link => link.style.display ='block')
        Cboda.forEach(link => link.style.display ='none')
        CB.forEach(link => link.style.display ='block')
    }
}