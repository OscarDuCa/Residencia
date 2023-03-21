const openModal = document.querySelector('.logged-In');
const openModal2 = document.querySelector('#CB');
const Modal = document.querySelector('.modal');
const Modal2 = document.querySelector('.modal2');
const bk = document.querySelector('.closeModal')
const acc = document.querySelector('.acc')

openModal.addEventListener('click' ,(e)=>{
    e.preventDefault();
    Modal.classList.add('modal--show');
})
openModal2.addEventListener('click' ,(e)=>{
    e.preventDefault();
    Modal.classList.add('modal--show');
})

bk.addEventListener('click' ,(e)=>{
    e.preventDefault();
    Modal.classList.remove('modal--show');
})

acc.addEventListener('click' ,(e)=>{
    e.preventDefault();
    Modal.classList.remove('modal--show');
    Modal2.classList.add('modal2--show');
})
